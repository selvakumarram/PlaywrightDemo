import { chromium } from "playwright"

describe("inTech Session Demo on Playwright", () => {
    test("iFrame Handling", async () => {
        const browser = await chromium.launch({
            headless: false,
            //channel: "chrome"
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");

        //iframe handling
        const iframe = page.frame({ name: "globalSqa" });
        if (iframe != null) {
            await iframe.fill("id=s", "Happy Coding");
            await iframe.click("//a[@title='Facebook']");
        } else throw new Error("no such frame");
    })
})