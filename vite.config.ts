import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		resolve: {
			alias: {
				"@shared": resolve(__dirname, "src/assets/shared"),
				"@shared-ts": resolve(__dirname, "src/shared"),
			},
		},
		server: {
			port: 5181,
		},
		build: {
			rollupOptions: {
				input: {
					main: resolve(__dirname, "index.html"),
				},
			},
		},
	};
});
