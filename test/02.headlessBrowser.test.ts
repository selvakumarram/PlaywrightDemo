import { chromium } from "playwright"

describe("inTech Session Demo on Playwright", () => {
    test("Headless Browser", async () => {
        const browser = await chromium.launch({
            headless: false,
            //channel:"chrome"            //To run in local browser //chrome, msedge
            //executablePath:"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"  // run in specific version
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://google.com");
    })
})