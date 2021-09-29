import { chromium } from "playwright"

describe("inTech Session Demo on Playwright", () => {
    test("Screenshot", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://google.com");
        await page.screenshot({ path: "./screenshots/image.png", });
        await page.screenshot({ path: `./screenshots/image2.png`, fullPage: true });
    })
})