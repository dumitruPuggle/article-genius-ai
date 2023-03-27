import { Browser } from "../chromium/browser";

test("Check the page title of example.com", async () => {
  const browser = await new Browser({
    launchWindow: false,
  }).autoDetect();

  const page = await browser.newPage();
  await page.goto("https://example.com");
  const pageTitle: any = await page.title();
  console.log(pageTitle);
  await browser.close();
});
