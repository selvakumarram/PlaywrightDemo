import { chromium } from "playwright"

describe("inTech Session Demo on Playwright", () => {
    test("Input Handling", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://home-sc10.ucnlabext.com/inContact/Login.aspx?");
        await page.type('id=ctl00_BaseContent_msl_txtUsername', 'agent01.sfdcinternalgbu@SC0010.com');//type function
        await page.fill('id=ctl00_BaseContent_msl_txtUsername', 'agent01.sfdcinternalgbu@SC0010.com'); //fill function
        await page.focus('id=ctl00_BaseContent_msl_txtUsername');
        //findElement
        const userName = await page.$('id=ctl00_BaseContent_msl_txtUsername'); //findelement
        if (userName != null) {
            await userName.fill('agent01.sfdcinternalgbu@SC0010.com');
        }
        //findElements
        const userNames = await page.$$('id=ctl00_BaseContent_msl_txtUsername');//findelements
        console.log("Total counts:", userNames.length);

        await page.keyboard.press('Enter');

    })
})