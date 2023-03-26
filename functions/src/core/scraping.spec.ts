import { PuppeteerBrowserInstance } from "../chromium/os-path-executables";

test("Check the page title of example.com", async () => {
  const browser = await PuppeteerBrowserInstance();

  const page = await browser.newPage();
  await page.goto("https://example.com");
  const pageTitle: any = await page.title();
  console.log(pageTitle);
  await browser.close();
});
