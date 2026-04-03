import { inject } from "@vercel/analytics";

import "./style.css";

inject({ mode: import.meta.env.PROD ? "production" : "development" });

import { I18nManager, type Resources } from "@shared-ts/i18n";
import { version as appVersionString } from "../package.json";
import characterImg from "./assets/character.png";

const MESUGAKI_PONG_URL = new URL(
	window.location.pathname,
	window.location.origin,
).toString();

const resources: Resources = {
	ja: {
		back_to_portal_html: '<span class="back-icon">←</span> BACK TO PORTAL',
		"mp.title": "メスガキポンポン",
		"mp.desc": "ボールを打ち返せ！ただし、何かおかしいかも……？",
		"mp.start": "START",
		"mp.restart": "RESTART",
		"encouraging.0": "がんばれっがんばれっ！あたしが見ててあげるから♡",
		"encouraging.1": "ほらほら、もうちょっとじゃん！やれるやれる～！",
		"encouraging.2": "おにーさんならできるって信じてあげてるんだからねっ！",
		"encouraging.3": "すっご～い！あたしが応援してあげたおかげだね♡",
		"encouraging.4": "ないちゃダメだよ？あたしがついてるでしょ～！",
		"encouraging.5": "えらいえらい♡よしよししてあげよっか？",
		"encouraging.6": "へぇ～ちゃんとやれるんじゃん！その調子その調子っ♡",
		"encouraging.7": "あたしの応援パワー受け取ってよねっ！ぜったい負けんな！",
		"encouraging.8": "ほらっ、下向いてないで？あたしの顔見て？大丈夫だから♡",
		"encouraging.9": "最後まであきらめないの！あたしが見届けてあげるっ♡",
		"challenging.0": "ふ～ん？ほんとにできるのかな～？見せてみてよ♡",
		"challenging.1": "へぇ～？口だけじゃないとこ、証明してみせてよ？",
		"challenging.2": "おにーさんってさぁ、あたしに勝てると思ってる？ねぇ？",
		"challenging.3": "ふぅん、やるじゃん？……まぁあたしの方がすごいけど♡",
		"challenging.4": "それで本気のつもり？もっと本気出してよ、つまんないな～",
		"challenging.5": "あっそ～？じゃあ実力見せてみなよ。待っててあげる♡",
		"challenging.6": "え、もう限界なの？あたしまだ全然余裕なんだけど～？",
		"challenging.7": "かかってきなよ♡ ……怖いの？しょうがないな～",
		"challenging.8": "あたしに追いつけると思ってんの？面白いこと言うね♡",
		"challenging.9":
			"ねぇねぇ、もしかして手加減してる？してないの？……え、マジ？",
		"mocking.0": "だっさ～ｗｗ あたしの方がうまくできちゃうけど？",
		"mocking.1": "え～っｗ それで全力なのぉ？うっそだぁ～ｗｗｗ",
		"mocking.2": "よわっ♡ よわっ♡ おにーさんよわすぎ～♡♡♡",
		"mocking.3": "ぷっくくく……ごめんね？笑うつもりなかったんだけどｗｗ",
		"mocking.4": "み～じめ♡ み～じめ♡ 泣いちゃう？泣いていいよ？ｗ",
		"mocking.5": "あたしに敵うと思った？その自信どっから来るのｗｗ",
		"mocking.6": "は？もう終わり？はっや～ｗｗ ざぁ～こ♡",
		"mocking.7":
			"なんかかわいそうになってきちゃった♡ なぐさめてほしい？ん～？ｗ",
		"mocking.8":
			"おにーさんって何やってもダメダメじゃ～ん♡ わからせてあげよっか？ｗ",
		"mocking.9": "えっ、まだやるの？負けるの見るのもう飽きちゃったんだけど～ｗ",
		"mocking.10": "おにーさんってほんっとにセンスないよね♡ 生まれつき？ｗ",
		"mocking.11": "ねぇ今どんな気持ち？ねぇねぇどんな気持ち～？♡ｗｗ",
		"mocking.12": "ぎゃはっｗｗ 想像以上にひどくて逆にすごいんだけど～♡",
		"mocking.13": "あたしに勝とうなんて１００万年はやいんだよ♡ ざぁ～こ♡",
		"mocking.14": "もしかしてそれ……本気でやってるの？えっ……うそでしょｗｗｗ",
		"mocking.15": "よわよわパンチｗ そよ風の方がまだ強いかも～♡",
		"mocking.16": "顔真っ赤じゃ～ん♡ 悔しい？くやしいの？ねぇ～♡♡",
		"mocking.17":
			"おにーさんの努力ってさぁ、なんか報われないタイプだよね♡ ぷぷっ",
		"mocking.18":
			"降参しなよ～♡ あたしの靴ぺろぺろしたら許してあげてもいいよ？ｗ",
		"mocking.19":
			"あ～あ、つまんな♡ もうちょっと楽しませてくれると思ったのにな～",
		"mocking.20": "ねぇ聞いていい？生きてて恥ずかしくないの？ｗｗ ……うそうそ♡",
		"mocking.21": "雑魚すぎて逆にかわい～♡ ぺットにしてあげよっか？ｗ",
		"mocking.22":
			"ぴえん♡ ……ってあたしが泣くわけないじゃ～ん♡ 泣くのはそっちでしょｗ",
		"mocking.23": "記録更新だね♡ 最速で負けた記録♡♡ おめでと～ｗｗ",
		"mocking.24": "はいはい、がんばったがんばった♡ ……で、それが精一杯？ｗ",
		"mocking.25": "もぉ～見てらんないっ♡ 恥ずかしいのこっちなんだけど～ｗ",
		"mocking.26":
			"おにーさんさぁ、あたしの前でイキるのやめた方がいいよ？傷つくのそっちだから♡",
		"mocking.27": "ゴミみたいなスコアで草ｗｗ あっ、ゴミに失礼だったかも～♡",
		"mocking.28":
			"土下座したら再戦のチャンスくらいあげてもいいけど？……嘘♡ 何回やっても同じだよ♡ｗ",
		game_over: "ざぁ～こざぁ～こ♡ よわよわのよわ～♡♡",
		"mp.guidelines": "▶ 配信・収益化OK",
		"share.preview_label": "▼ 勝手に生成された投稿文 ▼",
		"share.tweet_template_0":
			"……え、【スコア: {score}】って何？♡ おにーさんもしかしてゲームの遊び方わかんなかった？♡ よちよち、おてて動かすんだよ～？赤ちゃんかな？♡ｗｗｗ",
		"share.tweet_template_1":
			"【スコア: {score}】ってｗｗｗ やる気あるのそれ？♡ あたしあくびしながらやってたんだけどな～♡ おにーさん存在がざぁ〜こ♡",
		"share.tweet_template_10":
			"うちのざぁ〜こ♡おにーさん、たったの【スコア: {score}】で負けちゃったんですけど〜ｗｗｗ おにーさんって何やってもダメダメじゃ～ん♡",
		"share.tweet_template_20":
			"【スコア: {score}】かぁ♡ ちょっとだけ頑張ったね？えらいえらい♡ ……で？♡ それで満足なの？♡ おにーさんの限界ひっく～ｗｗｗ",
		"share.tweet_template_30":
			"へぇ〜【スコア: {score}】まで来れたんだ？♡ やっとゲームのルール覚えたのかな～？♡ でもまだまだぜんっぜん足りないよ？ 本気出してこれとか泣いちゃうんだけど♡ｗ",
		"share.tweet_template_45":
			"【スコア: {score}】……ふぅん？♡ ちょっとだけ見直したかも♡ ……って言ったら嬉しい？♡ 残念、まだあたしの相手には程遠いですけど〜♡ｗ",
		"share.tweet_template_60":
			"【スコア: {score}】……っ！ へ,へぇ〜……♡ まあまあやるじゃん……♡ べっ別に焦ってなんかないし！！ おにーさんがちょっと粘っただけでしょ……♡",
		"share.tweet_template_75":
			"【スコア: {score}】って……な、なんで……？ おにーさんこんなに強かった……？ ……っ！ べべべ別にあたし手抜いてただけだし！！ 次は絶対……っ！💢",
		"share.tweet_template_90":
			"【スコア: {score}】…………うそ……あたしが……こんなざこに……追い詰められて……？ ………っ〜〜〜！！！ や、やめてよ……そんな目で見ないでよぉ……っ💦",
		"share.tweet_template_100":
			"【スコア: {score}】…………。 ……あたしの、負け……です……。 ごめんなさい、おにーさんのこと……ざこって言って……ごめんなさいっ……。 あたしが……ざこでした……♡♡♡",
		"share.hashtag": "#メスガキポンポン",
		"share.btn": "𝕏のフォロワーに泣きつく😭",
	},
	en: {
		back_to_portal_html: '<span class="back-icon">←</span> BACK TO PORTAL',
		"mp.title": "MESUGAKI PONG",
		"mp.desc":
			"A bratty girl challenges you to MESUGAKI PONG! But something seems off...?",
		"mp.start": "START",
		"mp.restart": "RESTART",
		"encouraging.0": "Do your best, do your best! I'm watching you! ♡",
		"encouraging.1": "Come on, almost there! You can do it!",
		"encouraging.2": "I believe you can do it, Onii-san!",
		"encouraging.3": "Wow! It's all because I cheered for you! ♡",
		"encouraging.4": "No crying allowed! I'm here with you!",
		"encouraging.5": "Aww, good job~ ♡ Want me to pat your head? ♡",
		"encouraging.6": "Oh, you're actually doing it! Keep it up! ♡",
		"encouraging.7": "I'm sending you my power! You better not lose!",
		"encouraging.8": "Hey, look at me! You'll be fine! ♡",
		"encouraging.9": "Don't give up until the end! I'll be watching! ♡",
		"challenging.0": "Hmm, can you really do it? Let's see it. ♡",
		"challenging.1": "Oh really? Prove it to me then!",
		"challenging.2": "Do you really think you can beat me, Onii-san?",
		"challenging.3": "Not bad... well, I'm still better though. ♡",
		"challenging.4":
			"Is that your best? Show me something real, I'm getting bored.",
		"challenging.5": "Is that so? Show me your skills then. I'll wait. ♡",
		"challenging.6": "Aw, at your limit already? I'm barely trying!",
		"challenging.7": "Bring it on! ♡ Are you scared? Typical.",
		"challenging.8": "You think you can catch up? That's hilarious! ♡",
		"challenging.9": "Are you holding back? Wait, you're not? Seriously?",
		"mocking.0": "So lame! Even I could do better than that! haha",
		"mocking.1": "Whaaaat? That was your full power? No way!!! lmao",
		"mocking.2": "So weak! So weak! You're too weak, Onii-san! ♡♡♡",
		"mocking.3": "Pfft... sorry, I didn't mean to laugh. heh",
		"mocking.4": "Pathetic! So pathetic! Are you gonna cry? You can cry! haha",
		"mocking.5":
			"You thought you could beat me? Where did that confidence come from? lmao",
		"mocking.6": "Huh? Done already? That was fast! ahaha~ Loser. ♡",
		"mocking.7": "I feel kinda bad for you. ♡ Want me to comfort you? heh",
		"mocking.8":
			"You're useless at everything, Onii-san. ♡ Shall I teach you a lesson? lmao",
		"mocking.9": "Still trying? I'm getting bored of watching you lose. haha",
		"mocking.10":
			"You really have zero talent, Onii-san. ♡ Were you born like this? pfft",
		"mocking.11": "How does it feel? Tell me, how does it feel?? ♡ ahaha~",
		"mocking.12": "Bwahaha! That was so bad it's actually impressive! ♡",
		"mocking.13": "You won't beat me in a million years! ♡ Loserrrrr ♡",
		"mocking.14":
			"Wait... were you seriously trying just now? You're kidding, right? lmao",
		"mocking.15": "Weak little hits. A breeze is stronger than that! ♡",
		"mocking.16": "Your face is so red! ♡ Are you frustrated? Are you? ♡♡",
		"mocking.17":
			"Your efforts never really pay off, do they, Onii-san? ♡ Pfft.",
		"mocking.18":
			"Just give up! ♡ If you lick my shoes, I might forgive you! lmao",
		"mocking.19": "Aaah, this is boring. ♡ I thought you'd entertain me more.",
		"mocking.20": "Aren't you embarrassed to be alive? pfft Just kidding! ♡",
		"mocking.21": "You're so weak it's cute! ♡ Want to be my pet? haha",
		"mocking.22":
			"Boo-hoo! ♡ ...Like I'd ever cry! ♡ You're the one crying! lmao",
		"mocking.23": "New record! ♡ Fastest to lose! ♡♡ Congrats! lmao",
		"mocking.24": "Yeah yeah, good job. ♡ ...Wait, that was your best? haha",
		"mocking.25":
			"I can't even watch! ♡ I'm getting secondhand embarrassment! lmao",
		"mocking.26":
			"You should stop acting tough around me, Onii-san. It just hurts you more. ♡",
		"mocking.27":
			"Garbage score! lol Oh, sorry, that's insulting to garbage! ♡",
		"mocking.28":
			"If you beg, I might give you a rematch. ...Just kidding! ♡ The result will be the same! ahaha~",
		game_over: "Loser~ Loser~ ♡ So weak, so weak, sooo weak~ ♡♡",
		"mp.guidelines": "▶ Streaming & Monetization OK",
		"share.preview_label": "▼ Auto-generated Post ▼",
		"share.tweet_template_0":
			"...Huh, [Score: {score}]? ♡ Onii-san, did you even know how to play? ♡ Aww, you move the paddle, okay~? Are you a baby? ♡ lmao",
		"share.tweet_template_1":
			"[Score: {score}]??? lmao Were you even trying? ♡ I was yawning the whole time and still crushed you! ♡ Your entire existence is weak~ ♡",
		"share.tweet_template_10":
			"My poor little loser ♡ Onii-san only got [Score: {score}] before losing~ lmao You're hopeless at everything, aren't you~ ♡",
		"share.tweet_template_20":
			"[Score: {score}]~ ♡ Aww, you tried a little! Good boy, good boy~ ♡ ...So? ♡ That's it? ♡ Your limit is sooo low it's hilarious lmao",
		"share.tweet_template_30":
			"Ohhh~ [Score: {score}]? ♡ You finally learned how the game works? ♡ But that's still noooowhere near enough~ ♡ THIS is your full power? I'm gonna cry laughing lmao",
		"share.tweet_template_45":
			"[Score: {score}]... Hmm? ♡ Maybe I'm a tiny bit impressed~ ♡ ...Did that make you happy? ♡ Too bad, you're still light-years from beating me~ ♡ lol",
		"share.tweet_template_60":
			"[Score: {score}]...! H-Heh~ ♡ Not bad, I guess...♡ I-I'm NOT nervous, okay?! You just got lucky and lasted a bit longer, that's all...! ♡",
		"share.tweet_template_75":
			"[Score: {score}]?! ...H-How...? Since when were you this strong...? ...!! I-I was just going easy on you, okay?! Next time I'll definitely...! 💢",
		"share.tweet_template_90":
			"[Score: {score}]...... No way... I'm being... cornered... by someone like you...? ...~~~!!! S-Stop... don't look at me like that... please...💦",
		"share.tweet_template_100":
			"[Score: {score}]...... I... I lost... I'm sorry... for calling you weak... I'm sorry... I was the weak one all along... ♡♡♡",
		"share.hashtag": "#MesugakiPong",
		"share.btn": "Cry to 𝕏 followers😭",
	},
};

const i18n = new I18nManager(resources);

function getShareText(currentScore: number): string {
	let templateKey = "share.tweet_template_0";
	if (currentScore >= 100) {
		templateKey = "share.tweet_template_100";
	} else if (currentScore >= 90) {
		templateKey = "share.tweet_template_90";
	} else if (currentScore >= 75) {
		templateKey = "share.tweet_template_75";
	} else if (currentScore >= 60) {
		templateKey = "share.tweet_template_60";
	} else if (currentScore >= 45) {
		templateKey = "share.tweet_template_45";
	} else if (currentScore >= 30) {
		templateKey = "share.tweet_template_30";
	} else if (currentScore >= 20) {
		templateKey = "share.tweet_template_20";
	} else if (currentScore >= 10) {
		templateKey = "share.tweet_template_10";
	} else if (currentScore >= 1) {
		templateKey = "share.tweet_template_1";
	}
	const template = i18n.t(templateKey, { score: currentScore });
	const hashtag = i18n.t("share.hashtag");
	return `${template}\n\n${MESUGAKI_PONG_URL}\n\n${hashtag}`;
}

i18n.updatePage();
i18n.setupLanguageButtons();

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
// biome-ignore lint/style/noNonNullAssertion: canvas.getContext("2d") は常に存在する前提
const ctx = canvas.getContext("2d")!;
const gameContainer = document.getElementById(
	"game-container",
) as HTMLDivElement;
const annoyingMessage = document.getElementById(
	"annoying-message",
) as HTMLDivElement;
const uiLayer = document.getElementById("ui-layer") as HTMLDivElement;
const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
const appFooter = document.querySelector(".app-footer") as HTMLElement;

let score = 0;
let isGameOver = false;
let isGameStarted = false;
let lastPhrase = "";
let messageTimeoutId: number | null = null;

// スコアしきい値の定数化
const SCORE_THRESHOLD_ENCOURAGING = 3;
const SCORE_THRESHOLD_CHALLENGING = 7;

// メッセージ・表示関連の定数
const MESSAGE_BASE_SCALE = 0.7;
const MESSAGE_RANDOM_SCALE_RANGE = 0.5;
const MESSAGE_DISPLAY_DURATION = 1200;
const GAME_OVER_FONT_SIZE = 60;
const BALL_INITIAL_SPEED = 7.071; // 5 * sqrt(2) に近い値
const BALL_SPEED_INCREMENT = 0.2;

const paddle = {
	width: 100,
	height: 15,
	x: canvas.width / 2 - 50,
	y: canvas.height - 30,
};

const initialSpeed = BALL_INITIAL_SPEED + score * BALL_SPEED_INCREMENT;
const ball = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	radius: 10,
	speed: initialSpeed,
	dx: initialSpeed / Math.sqrt(2),
	dy: -initialSpeed / Math.sqrt(2),
};

let currentRotation = 0;
let currentScale = 1;
let currentMessageScale = 1; // メッセージのスケールを保持（水平維持の計算で使用）
let isSpinning = false;
let hasRotated30 = false;
let spinTimeoutId: number | null = null;

function applyTransform() {
	gameContainer.style.transform = `scale(${currentScale}) rotate(${currentRotation}deg)`;
	// コンテナが回転・スピンする際にメッセージも逆回転させて水平を保つ
	updateMessageTransform();
}

function updateMessageTransform() {
	if (annoyingMessage.style.opacity === "1") {
		// コンテナが持っている回転(currentRotation)を逆回転(-currentRotation)させて打ち消す
		annoyingMessage.style.transform = `translate(-50%, -50%) scale(${currentMessageScale}) rotate(${-currentRotation}deg)`;
	}
}

function updateScale() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	// 800x600の対角線は1000なので、回転しても見切れないように1000を基準にする
	const targetWidth = 1000;
	const targetHeight = 1000;

	// 画面に収まるようにスケールを計算（マージンを考慮）
	const scaleW = (width - 40) / targetWidth;
	const scaleH = (height - 140) / targetHeight; // フッターやヘッダーの分を考慮
	currentScale = Math.max(0.15, Math.min(1, scaleW, scaleH));

	applyTransform();
}

window.addEventListener("resize", updateScale);
updateScale();

const phrasesByStage = {
	encouraging: Array.from({ length: 10 }, (_, i) => `encouraging.${i}`),
	challenging: Array.from({ length: 10 }, (_, i) => `challenging.${i}`),
	mocking: Array.from({ length: 29 }, (_, i) => `mocking.${i}`),
};

function drawPaddle() {
	ctx.fillStyle = "#fff";
	ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
	ctx.fillStyle = "#ff4444";
	ctx.fill();
	ctx.closePath();
}

function drawScore() {
	ctx.textAlign = "left";
	ctx.font = "24px Orbitron, sans-serif";
	ctx.fillStyle = "#fff";
	ctx.fillText(`Score: ${score}`, 20, 40);
}

function showAnnoyingMessage() {
	let phrases: string[];
	if (score <= SCORE_THRESHOLD_ENCOURAGING) {
		phrases = phrasesByStage.encouraging;
	} else if (score <= SCORE_THRESHOLD_CHALLENGING) {
		phrases = phrasesByStage.challenging;
	} else {
		phrases = phrasesByStage.mocking;
	}

	let availablePhrases = phrases.filter((p) => p !== lastPhrase);
	if (availablePhrases.length === 0) availablePhrases = phrases;
	const phrase =
		availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
	lastPhrase = phrase;
	annoyingMessage.replaceChildren();
	const group = document.createElement("div");
	group.className = "message-group";
	const img = document.createElement("img");
	img.src = characterImg;
	img.className = "character-img";
	img.alt = "character";
	const span = document.createElement("span");
	span.className = "message-text";
	span.textContent = i18n.t(phrase);
	group.appendChild(img);
	group.appendChild(span);
	annoyingMessage.appendChild(group);
	annoyingMessage.style.opacity = "1";

	// まずランダムなスケールを仮設定
	currentMessageScale =
		MESSAGE_BASE_SCALE + Math.random() * MESSAGE_RANDOM_SCALE_RANGE;

	// DOM要素の実際の幅を取得し、ウィンドウ幅(40pxの余裕)を超えれば縮小する
	const actualWidth =
		annoyingMessage.offsetWidth * currentMessageScale * currentScale;
	const maxWidth = window.innerWidth - 40;
	if (actualWidth > maxWidth && actualWidth > 0) {
		currentMessageScale = currentMessageScale * (maxWidth / actualWidth);
	}

	updateMessageTransform();

	if (messageTimeoutId) {
		clearTimeout(messageTimeoutId);
	}

	messageTimeoutId = setTimeout(() => {
		annoyingMessage.style.opacity = "0";
		messageTimeoutId = null;
	}, MESSAGE_DISPLAY_DURATION);
}

function applyCrazyGimmick() {
	// ボールのサイズ変化
	if (score >= 20) {
		ball.radius = 5;
	} else {
		ball.radius = 10;
	}

	if (isSpinning) return;

	if (score === 30 && !hasRotated30) {
		hasRotated30 = true;
		isSpinning = true;
		gameContainer.style.transition = "transform 0.9s ease-in-out";
		currentRotation += 720;
		applyTransform();

		spinTimeoutId = window.setTimeout(() => {
			gameContainer.style.transition = "";
			isSpinning = false;
			spinTimeoutId = null;
		}, 900);
		return;
	}

	let targetRotation = 0;
	if (score <= SCORE_THRESHOLD_ENCOURAGING) {
		// スコア初期段階（応援モード）
		targetRotation = 0;
	} else if (score <= SCORE_THRESHOLD_CHALLENGING) {
		// スコア中間段階（挑発モード）
		targetRotation = (Math.random() - 0.5) * 20;
	} else if (score < 30) {
		// スコア後半段階（煽りモード前半）
		targetRotation = (Math.random() - 0.5) * 90;
	} else {
		// スコア30〜: 左右75度（±75度） + 二回転分の720度
		targetRotation = 720 + (Math.random() - 0.5) * 150;
	}

	currentRotation = targetRotation;
	applyTransform();
}

let langListenerController: AbortController | null = null;

function resetGame() {
	// 言語リスナーを解除
	if (langListenerController) {
		langListenerController.abort();
		langListenerController = null;
	}

	isGameOver = false;
	score = 0;
	const currentSpeed = BALL_INITIAL_SPEED + score * BALL_SPEED_INCREMENT;
	ball.x = canvas.width / 2;
	ball.y = canvas.height / 2;
	ball.speed = currentSpeed;
	ball.dx = currentSpeed / Math.sqrt(2);
	ball.dy = -currentSpeed / Math.sqrt(2);
	ball.radius = 10;
	currentRotation = 0;
	isSpinning = false;
	hasRotated30 = false;
	if (spinTimeoutId) {
		window.clearTimeout(spinTimeoutId);
		spinTimeoutId = null;
	}

	gameContainer.style.transition = "";
	applyTransform();
	canvas.style.cursor = "none";
	annoyingMessage.style.opacity = "0"; // メッセージを隠す
	currentMessageScale = 1; // リセット
	appFooter?.classList.add("hidden");
	lastPhrase = "";

	// 再開時にPointer Lockを要求
	if (document.pointerLockElement !== canvas) {
		canvas.requestPointerLock();
	}
}

function update() {
	if (!isGameStarted || isGameOver) return;

	// Move paddle based on mouse
	// Mouse tracking is handled in an event listener, so paddle.x is updated there.

	// Move ball
	ball.x += ball.dx;
	ball.y += ball.dy;

	// Wall collision (left/right)
	if (ball.x + ball.radius > canvas.width && ball.dx > 0) {
		ball.dx *= -1;
		ball.x = canvas.width - ball.radius;
	} else if (ball.x - ball.radius < 0 && ball.dx < 0) {
		ball.dx *= -1;
		ball.x = ball.radius;
	}

	// Wall collision (top)
	if (ball.y - ball.radius < 0 && ball.dy < 0) {
		ball.dy *= -1;
		ball.y = ball.radius;
	}

	// Paddle collision
	if (
		ball.y + ball.radius >= paddle.y &&
		ball.y - ball.radius <= paddle.y + paddle.height &&
		ball.x + ball.radius >= paddle.x &&
		ball.x - ball.radius <= paddle.x + paddle.width
	) {
		// Avoid double collision
		if (ball.dy > 0) {
			ball.dy *= -1;

			// 角度を維持したまま、新しいスコアに基づくスピードで速度を更新
			score++;
			const currentSpeed = BALL_INITIAL_SPEED + score * BALL_SPEED_INCREMENT;
			ball.speed = currentSpeed;

			// 打ち返し位置によるDXの変化（既存ロジック）
			const hitPoint = ball.x - (paddle.x + paddle.width / 2);
			const newDx = hitPoint * 0.15;

			// 新しい速度ベクトルを計算
			const angle = Math.atan2(ball.dy, newDx);
			ball.dx = Math.cos(angle) * ball.speed;
			ball.dy = Math.sin(angle) * ball.speed;

			applyCrazyGimmick();
			showAnnoyingMessage(); // パドルで打ち返した時に100%表示
		}
	}

	// Bottom collision (Game Over)
	if (ball.y + ball.radius > canvas.height) {
		isGameOver = true;
		canvas.style.cursor = "default";
		if (document.pointerLockElement === canvas) {
			document.exitPointerLock();
		}

		// ゲームオーバー処理の冒頭でメッセージ消去タイマーをクリア
		if (messageTimeoutId) {
			clearTimeout(messageTimeoutId);
			messageTimeoutId = null;
		}

		// ゲームオーバー時にも動的メッセージを表示
		annoyingMessage.replaceChildren();
		const group = document.createElement("div");
		group.className = "message-group";
		const img = document.createElement("img");
		img.src = characterImg;
		img.className = "character-img";
		img.alt = "character";
		const span = document.createElement("span");
		span.className = "message-text";
		// 日本語の顔文字部分が長いための調整として英数字の長さを確認
		const gameOverText = i18n.t("game_over");
		span.style.fontSize =
			gameOverText.length > 25
				? `${GAME_OVER_FONT_SIZE * 0.7}px`
				: `${GAME_OVER_FONT_SIZE}px`;
		span.textContent = gameOverText;
		group.appendChild(img);
		group.appendChild(span);

		const restartGroup = document.createElement("div");
		restartGroup.className = "restart-group";

		// プレビューUIの生成
		const previewDiv = document.createElement("div");
		previewDiv.className = "tweet-preview";
		const previewLabel = document.createElement("div");
		previewLabel.className = "preview-label";
		previewLabel.textContent = i18n.t("share.preview_label");
		const previewText = document.createElement("div");
		previewText.className = "preview-text";
		previewText.textContent = getShareText(score);
		previewDiv.appendChild(previewLabel);
		previewDiv.appendChild(previewText);

		// シェアボタンの生成
		const shareBtn = document.createElement("button");
		shareBtn.className = "restart-hint share-btn";
		shareBtn.textContent = i18n.t("share.btn");
		shareBtn.addEventListener("click", (e) => {
			e.stopPropagation();
			const text = getShareText(score);
			const encodedText = encodeURIComponent(text);
			window.open(
				`https://x.com/intent/tweet?text=${encodedText}`,
				"_blank",
				"noopener,noreferrer",
			);
		});
		restartGroup.appendChild(shareBtn);

		const restartBtn = document.createElement("button");
		restartBtn.className = "restart-hint";
		restartBtn.dataset.i18n = "mp.restart";
		restartBtn.textContent = i18n.t("mp.restart");
		restartBtn.addEventListener("click", (e) => {
			e.stopPropagation();
			resetGame();
		});
		restartGroup.appendChild(restartBtn);

		// 言語切り替え時にプレビューを更新
		if (langListenerController) {
			langListenerController.abort();
		}
		langListenerController = new AbortController();
		const langBtns = document.querySelectorAll("[data-lang-btn]");
		for (const btn of langBtns) {
			btn.addEventListener(
				"click",
				() => {
					if (isGameOver) {
						previewText.textContent = getShareText(score);
						shareBtn.textContent = i18n.t("share.btn");
						previewLabel.textContent = i18n.t("share.preview_label");
						restartBtn.textContent = i18n.t("mp.restart");
						const updatedGameOverText = i18n.t("game_over");
						span.style.fontSize =
							updatedGameOverText.length > 25
								? `${GAME_OVER_FONT_SIZE * 0.7}px`
								: `${GAME_OVER_FONT_SIZE}px`;
						span.textContent = updatedGameOverText;
					}
				},
				{ signal: langListenerController.signal },
			);
		}

		annoyingMessage.appendChild(group);
		annoyingMessage.appendChild(previewDiv);
		annoyingMessage.appendChild(restartGroup);
		annoyingMessage.style.opacity = "1";

		// 描画後にはみ出し判定を行う
		currentMessageScale = 1.0;
		const actualWidth =
			annoyingMessage.offsetWidth * currentMessageScale * currentScale;
		const maxWidth = window.innerWidth - 40;
		if (actualWidth > maxWidth && actualWidth > 0) {
			currentMessageScale = maxWidth / actualWidth;
		}

		updateMessageTransform();
		appFooter?.classList.remove("hidden");
		// ゲームオーバー時は自動で消さない
	}
}

function draw() {
	// Clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawPaddle();
	drawBall();
	drawScore();

	// Canvas上での描画は廃止（HTMLレイヤーに統一）
}

let lastTime = 0;
const TIMESTEP = 1000 / 60;
let accumulator = 0;

function loop(timestamp: number) {
	if (lastTime === 0) {
		lastTime = timestamp;
	}
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;

	if (deltaTime > 250) {
		deltaTime = 250;
	}

	accumulator += deltaTime;

	while (accumulator >= TIMESTEP) {
		update();
		accumulator -= TIMESTEP;
	}

	draw();
	requestAnimationFrame(loop);
}

// Event Listeners
startBtn.addEventListener("click", () => {
	isGameStarted = true;
	uiLayer.classList.add("hidden");
	appFooter?.classList.add("hidden");
	canvas.style.cursor = "none";
	if (document.pointerLockElement !== canvas) {
		canvas.requestPointerLock();
	}
});

canvas.addEventListener("mousemove", (e) => {
	if (!isGameStarted || isGameOver) return;

	if (document.pointerLockElement === canvas) {
		// プレイ中はPointer Lockの移動量(movementX)を使う
		paddle.x += e.movementX / currentScale;
	} else {
		const rect = canvas.getBoundingClientRect();
		const rootX = e.clientX - rect.left;
		paddle.x = rootX / currentScale - paddle.width / 2;
	}

	// Boundary check
	if (paddle.x < 0) paddle.x = 0;
	if (paddle.x + paddle.width > canvas.width)
		paddle.x = canvas.width - paddle.width;
});

// リスタートボタン以外のクリックでリスタートしないように window へのイベントリスナーを削除

// Start game
requestAnimationFrame(loop);

// Version display
const appVersion = document.getElementById("app-version");
if (appVersion) {
	appVersion.textContent = `v${appVersionString}`;
}
