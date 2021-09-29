import { chromium } from "playwright"

describe("inTech Session Demo on Playwright", () => {
    test("Alert Handling", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();        
        await page.goto("file:///C:/Demo/Dialogs.html");
        page.on('dialog', dialog => {
            console.log("Message: " + dialog.message());
            console.log("Default Message: " + dialog.defaultValue());
            console.log("Type of Dialog: " + dialog.type());
            dialog.accept("Selva");
        })
        const ele = await page.$("//button");
        await ele?.click();
    })
})
