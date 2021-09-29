import { chromium } from "playwright"

describe("inTech Session Demo on Playwright", () => {
    test("Video Recording", async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            recordVideo: {
                dir: "./videos",
                size: {
                    width: 800,
                    height: 600
                }
            }
        });
        const page = await context.newPage();
        await page.goto("https://google.com");
    })
})