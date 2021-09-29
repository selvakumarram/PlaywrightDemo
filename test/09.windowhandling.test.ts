import { chromium } from "playwright"

describe("inTech Session Demo on Playwright", () => {
    test("Window Handling", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("http://www.seleniumframework.com/Practiceform/");

        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("id=button1")
        ])
        await newWindow.waitForLoadState();
        console.log("New Page Window URL: ", newWindow.url());
        await newWindow.close();
        await page.bringToFront(); //Switch to Default content
        console.log("Page Window URL: ", page.url());
        await page.close();
    })

    xtest("New Tab Handling", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("http://www.seleniumframework.com/Practiceform/");

        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("//button[text()='New Browser Tab']")
        ])
        await newWindow.waitForLoadState();
        console.log("New Page Window URL: ", newWindow.url());
        await newWindow.close();
        await page.bringToFront();
        console.log("Page Window URL: ", page.url());
        await page.close();
    })

    xtest("Mulitple Window Handling", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("http://www.seleniumframework.com/Practiceform/");

        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("//button[text()='New Browser Tab']")
        ])
        await newWindow.waitForLoadState();
        const totalWindows = newWindow.context().pages(); // no.of opened windows
        console.log("No.of Opened Pages: ", totalWindows.length);

        //switch between windows
        await totalWindows[1].bringToFront();
        await totalWindows[0].bringToFront();
        await totalWindows[1].close();
    })

})