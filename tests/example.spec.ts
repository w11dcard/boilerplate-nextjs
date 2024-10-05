import { test } from "@playwright/test"

test("should display Hello message", async ({ page }) => {
	await page.goto("/")
	await page.click("text=Hello World!")
	await page.waitForTimeout(5000)
	await page.screenshot({ path: "tests/test-results/screenshot.png" })
})
