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
        await page.goto("https://na1.dev.nice-incontact.com/login/");
        reporter.endStep();
        reporter.startStep("Enter UserName");
        await page.fill('input#emailFieldNext', 'nitin.n1@do79.com');
        const userNameImage = await page.screenshot();
        reporter.addAttachment("EnterUserName", userNameImage, "image/png");
        reporter.endStep();
        reporter.startStep("Click On Next Button");
        await page.click('button#nextBtn');
        reporter.endStep();
        reporter.startStep("Enter Password");
        await page.fill('input#mfaPassField', 'India123');
        const passwordImage = await page.screenshot();
        reporter.addAttachment("EnterPassword", passwordImage, "image/png");
        reporter.endStep();
        reporter.startStep("Click On Sign In");
        await Promise.all([
            page.waitForNavigation(),
            page.click('[aria-label="Sign In"]')
        ]);
        const homeImage = await page.screenshot();
        reporter.addAttachment("HomeScreen", homeImage, "image/png");
        reporter.endStep();

    });
})