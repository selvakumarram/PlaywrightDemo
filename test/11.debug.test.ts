import { chromium } from "playwright";

describe("inTech Session Demo on Playwright", () => {
    test('Debug Test', async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://na1.staging.nice-incontact.com/login/");
        await page.fill('input#emailFieldNext', 'nitin.nazare@so32.com');
        await page.click('button#nextBtn');
        await page.fill('input#mfaPassField', 'India123');
        await Promise.all([
            page.waitForNavigation(),
            page.click('[aria-label="Sign In"]')
        ]);
        await browser.close();

    });
})