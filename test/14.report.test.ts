import { Browser, chromium, Page } from "playwright";
import { Reporter } from "jest-allure/dist/Reporter";

declare const reporter: Reporter;

describe("inTech Session Demo on Playwright", () => {
    let browser: Browser;
    let page: Page;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        page = await context.newPage();
        await page.setDefaultTimeout(60000);
    })

    afterEach(async () => {
        await browser.close();
    })

    test('Allure report Test', async () => {
        reporter.startStep("Nvaigate to Url");
        await page.goto("https://na1.staging.nice-incontact.com/login/");
        reporter.endStep();
        reporter.startStep("Enter UserName");
        await page.fill('input#emailFieldNext', 'nitin.nazare@so32.com');
        reporter.endStep();
        reporter.startStep("Click On Next Button");
        await page.click('button#nextBtn');
        reporter.endStep();
        reporter.startStep("Enter Password");
        await page.fill('input#mfaPassField', 'India123');
        reporter.endStep();
        reporter.startStep("Click On Sign In");
        await Promise.all([
            page.waitForNavigation(),
            page.click('[aria-label="Sign In"]')
        ]);
        reporter.endStep();
    });
})