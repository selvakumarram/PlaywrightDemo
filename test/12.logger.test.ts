import { chromium } from "playwright";

describe("inTech Session Demo on Playwright", () => {
    test('Logger Test', async () => {
        const browser = await chromium.launch({
            logger: {
                isEnabled: (name, severity) => true,
                log: (name, severity, message, args) => console.log(`${name} ${message}`)
            },
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://na1.dev.nice-incontact.com/login/");
        await page.fill('input#emailFieldNext', 'nitin.n1@do79.com');
        await page.click('button#nextBtn');
        await page.fill('input#mfaPassField', 'India123');
        await Promise.all([
            page.waitForNavigation(),
            page.click('[aria-label="Sign In"]')
        ]);
        await browser.close();

    });
});