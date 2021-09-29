import { chromium } from "playwright";

describe("inTech Session Demo on Playwright", () => {
    test.only('Traces Test', async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        await context.tracing.start({ screenshots: true, snapshots: true });
        const page = await context.newPage();
        try {
            await page.goto("https://na1.dev.nice-incontact.com/login/");
            await page.fill('input#emailFieldNext', 'nitin.n1@do79.com');
            await page.click('button#nextBtn');
            await page.fill('input#mfaPassField', 'India123');
            await Promise.all([
                page.waitForNavigation(),
                page.click('[aria-label="Sign In"]')
            ]);
        } catch (error) {
            throw error;
        } finally {

            await context.tracing.stop({ path: 'trace.zip' });
            await browser.close();
        }
    });
});