import { chromium } from "playwright"

describe("inTech Session Demo on Playwright", () => {
    test("Launch Browser", async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://google.com");
    })
})