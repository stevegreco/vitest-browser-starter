/// <reference types="vitest" />

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	test: {
		browser: {
			enabled: true,
			provider: "playwright",
			instances: [{ browser: "chromium" }],
		},
		setupFiles: ["./src/testSetup.ts"],
	},
});
