import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    if (isMobile) test.skip();
    await page.goto("/");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Arjun Ramesh/);
  });

  test("navbar is visible", async ({ page }) => {
    await expect(page.locator("#navbar")).toBeVisible();
  });

  test("clicking Experience nav link scrolls to experience section", async ({ page }) => {
    await page.locator('a[href="#experience"]').first().click();
    await page.waitForTimeout(800);
    await expect(page.locator("#experience")).toBeInViewport();
  });

  test("clicking Skills nav link scrolls to skills section", async ({ page }) => {
    await page.locator('a[href="#skills"]').first().click();
    await page.waitForTimeout(800);
    await expect(page.locator("#skills")).toBeInViewport();
  });

  test("skip-to-content link is accessible via keyboard", async ({ page }) => {
    const skipLink = page.locator('a[href="#main-content"]');
    await skipLink.focus();
    await expect(skipLink).toBeFocused();
  });

  test("hero section contains name", async ({ page }) => {
    await expect(page.locator("#hero")).toContainText("Arjun");
  });

  test("experience section renders bento grid", async ({ page }) => {
    await page.locator('a[href="#experience"]').first().click();
    await page.waitForTimeout(300);
    await expect(page.locator("#experience h3")).toHaveCount(2);
  });
});

test.describe("Theme Toggle", () => {
  test.use({ colorScheme: "dark" });

  test("toggles from dark to light mode", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("data-theme", "dark");
    await page.locator('button[data-testid="theme-toggle"]:visible').click();
    await expect(html).toHaveAttribute("data-theme", "light");
  });

  test("theme preference persists across reload", async ({ page }) => {
    await page.goto("/");
    await page.locator('button[data-testid="theme-toggle"]:visible').click();
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });
});

test.describe("AI Assistant", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#ai-assistant").scrollIntoViewIfNeeded();
  });

  test("renders initial bot message", async ({ page }) => {
    await expect(page.locator("#ai-assistant")).toContainText("ask me anything", { ignoreCase: true });
  });

  test("sends message via button click", async ({ page }) => {
    const aiSection = page.locator("#ai-assistant");
    await aiSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    await page.getByPlaceholder("Ask about my systems").fill("performance");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(aiSection).toContainText("performance");
  });

  test("sends message via Enter key", async ({ page }) => {
    await page.getByPlaceholder("Ask about my systems").fill("cloud");
    await page.keyboard.press("Enter");
    await expect(page.locator("#ai-assistant")).toContainText("cloud");
  });

  test("suggestion chip fires a query", async ({ page }) => {
    const aiSection = page.locator("#ai-assistant");
    await aiSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const chip = page.locator('button:text("Tell me about")').first();
    await chip.click();
    
    await expect(page.getByRole("log")).toContainText("Tell me about", { timeout: 5000 });
  });
});

test.describe("Mobile Menu", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("hamburger opens mobile menu", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Open menu").click();
    await expect(page.locator("#mobile-menu")).toBeVisible();
  });

  test("backdrop click closes mobile menu", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Open menu").click();
    await expect(page.locator("#mobile-menu")).toBeVisible();

    await page.getByLabel("Close menu").click();
    await expect(page.locator("#mobile-menu")).toBeHidden();
  });
});

test.describe("Accessibility", () => {
  test("reduced-motion removes animations", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const htmlDiv = page.locator("html");
    const motionValue = await htmlDiv.evaluate((el) => getComputedStyle(el).scrollBehavior);
    expect(motionValue).toBe("auto");
  });
});
