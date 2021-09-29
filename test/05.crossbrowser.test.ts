const playwright = require('playwright');

describe("inTech Session Demo on Playwright", () => {
    test("Cross Browser", async () => {

        for (const browserTypes of ['chromium', 'webkit']) {
            const browser = await playwright[browserTypes].launch({
                headless: false
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://google.com");
            await page.screenshot({ path: `./screenshots/${browserTypes}.png` })
            await page.close();
            await context.close();
            await browser.close();
        }
    })
})