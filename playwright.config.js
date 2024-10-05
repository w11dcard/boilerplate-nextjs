import { defineConfig } from "@playwright/test"

export default defineConfig({
	testDir: "./tests",
	outputDir: "./tests/test-results",
	reporter: [["list"], ["json", { outputFile: "./tests/test-results/report.json" }]],
	use: {
		headless: true,
		coverage: {
			enabled: true,
			dir: "coverage",
		},
	},
	webServer: {
		command: "npm run dev",
		port: 3000,
		stdout: "ignore",
		stderr: "pipe",
		reuseExistingServer: !process.env.CI,
	},
})
