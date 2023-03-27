import { Browser } from "../browser";

test("Check if Browser is working locally", async () => {
  const browser = await new Browser({
    launchWindow: false,
  }).autoDetect();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const pageTitle: any = await page.title();
  console.log(pageTitle);
  await browser.close();
});
