#!/usr/bin/env python3
import subprocess
import sys
import concurrent.futures
import time

def run_task(name, command, cwd=None):
    """
    指定されたコマンドを実行し、成功・失敗と出力を返す。
    :param name: タスク名
    :param command: 実行するコマンド (リスト形式)
    :param cwd: 作業ディレクトリ (任意)
    :return: (is_success, name, output, duration)
    """
    start_time = time.time()
    try:
        # 出力をキャプチャして実行
        result = subprocess.run(
            command,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            cwd=cwd
        )
        duration = time.time() - start_time
        return True, name, result.stdout, duration
    except subprocess.CalledProcessError as e:
        duration = time.time() - start_time
        return False, name, e.stdout, duration

def execute_phase(phase_name, tasks):
    """
    タスクのリストを並列実行する。
    :param phase_name: フェーズ名 (ログ用)
    :param tasks: (name, command[, cwd]) のタプルのリスト。cwd は任意で、コマンドの作業ディレクトリとして使用されます。
    :return: 成功したかどうか (bool)
    """
    if phase_name:
        print(f"--- {phase_name} ---")

    if not tasks:
        print(f"Skipping {phase_name}: No tasks to run.")
        return True

    failed = False
    failure_details = []

    # 並列数はタスク数に応じて自動調整される
    with concurrent.futures.ThreadPoolExecutor(max_workers=len(tasks)) as executor:
        future_to_name = {
            executor.submit(run_task, *task): task[0]
            for task in tasks
        }

        for future in concurrent.futures.as_completed(future_to_name):
            success, name, output, duration = future.result()
            if success:
                print(f"✅ {name} ({duration:.2f}s)")
            else:
                print(f"❌ {name} ({duration:.2f}s)")
                failed = True
                failure_details.append((name, output))

    if failed:
        print("\n=== FAILURE DETAILS ===")
        for name, output in failure_details:
            print(f"--- {name} Output ---")
            safe_output = output or ""
            print(safe_output.strip())
            print("-----------------------")
        return False

    return True

def main():
    # Phase 1: Fix (修正タスク)
    fix_tasks = [
        ("TS Fix", ["make", "ts-fix-diff"]),
        ("HTML Fix", ["make", "html-fix-diff"]),
    ]

    # fix phase はエラーなしで続行
    execute_phase("Auto Fix Phase", fix_tasks)

    # Phase 2: Check (検証タスク)
    check_tasks = [
        ("TS Check", ["make", "ts-check-diff"]),
        ("HTML Check", ["make", "html-check-diff"]),
        ("Type Check", ["make", "check-ts"]),
        ("Custom Rules", ["make", "check-ts-rules"]),
    ]

    # アプリ固有のチェックスクリプト (各アプリの check_scripts/ 以下を動的に追加)
    import glob
    import os
    from pathlib import Path
    app_check_scripts = glob.glob("*/check_scripts/**/*.mjs", recursive=True) + \
                        glob.glob("*/check_scripts/**/*.js", recursive=True) + \
                        glob.glob("*/check_scripts/**/*.py", recursive=True) + \
                        glob.glob("*/check_scripts/**/*.sh", recursive=True)
    for script in app_check_scripts:
        script_path = Path(script)
        # ディレクトリ名を取得 (例: mesugaki-pong)
        app_name = script_path.parts[0]
        script_basename = script_path.name
        name = f"{app_name}: {script_basename}"

        # アプリディレクトリからの相対パスを取得
        rel_path = str(script_path.relative_to(app_name))

        # 実行コマンドの決定
        if script.endswith(".py"):
            cmd = ["python3", rel_path]
        elif script.endswith(".sh"):
            cmd = ["sh", rel_path]
        else:
            cmd = ["node", rel_path]

        # 各アプリのディレクトリを作業ディレクトリとして指定する
        cwd = app_name
        check_tasks.append((name, cmd, cwd))

    if not execute_phase("Check Phase", check_tasks):
        print("Check phase failed.")
        sys.exit(1)

    print("\n🎉 All CI tasks passed!")

if __name__ == "__main__":
    main()
