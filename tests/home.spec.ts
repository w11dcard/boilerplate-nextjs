import { expect, test } from "@playwright/test"

test.describe("Home Page", () => {
	test("should fetch and display message when button is clicked", async ({ page }) => {
		await page.goto("/")
		await page.click('button:has-text("Hello World!")')
		page.route("/api/hello", async (route) => {
			await route.fulfill({
				contentType: "application/json",
				body: JSON.stringify({ message: "Hello from the test route!" }),
			})
		})
		await expect(page.locator("strong")).toHaveText("Hello from the test route!")
	})
})
