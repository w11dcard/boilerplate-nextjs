import { expect, test } from "@playwright/test"

test.describe("Login Page", () => {
	test("should display Sign In options", async ({ page }) => {
		await page.goto("/login")
		await expect(page.locator("strong")).toHaveText("Sign In")
		await expect(page.locator('button:has-text("Sign In With GitHub")')).toBeVisible()
		await expect(page.locator('button:has-text("Sign In With Google")')).toBeVisible()
	})

	test("should handle sign in with GitHub button click", async ({ page }) => {
		await page.goto("/login")
		await page.click('button:has-text("Sign In With GitHub")')
	})

	test("should handle sign in with Google button click", async ({ page }) => {
		await page.goto("/login")
		await page.click('button:has-text("Sign In With Google")')
	})
})
