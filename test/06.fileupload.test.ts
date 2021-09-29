import { chromium } from "playwright"

describe("inTech Session Demo on Playwright", () => {
    test("Fileupload", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://the-internet.herokuapp.com/upload");
        //with input type File
        await page.setInputFiles('id=file-upload', "./screenshots/chromium.png");

        //without input type File tag
        await page.on('filechooser', async (filechooser) => {
            await filechooser.setFiles("./screenshots/chromium.png");
        })
        await page.click('#drag-drop-upload', { force: true });
    })
})