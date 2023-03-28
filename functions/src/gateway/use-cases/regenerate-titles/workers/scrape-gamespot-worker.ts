import { Browser } from "../../../../chromium/browser";
import { Scrapper } from "../../../../core/scrapers/scapper";
import { gamespotURL } from "./utils";

const scrapeGamespotWorker = async (): Promise<string[]> => {
  const browser = await new Browser({ launchWindow: false }).autoDetect();
  const scapper = new Scrapper(browser);
  const page = await scapper.pageWithLowNetwork(gamespotURL);

  const h2Titles = await page.evaluate(() => {
    const h2Tags = document.getElementsByTagName("h2");
    return Array.prototype.slice
      .call(h2Tags, 0)
      .map((element) => element.innerHTML);
  });

  const h3Titles = await page.evaluate(() => {
    const h3Tags = document.getElementsByTagName("h3");
    return Array.prototype.slice
      .call(h3Tags, 0)
      .map((element) => element.innerHTML)
      .filter((e, i) => i < 6); // Only 6
  });

  await scapper.browser.close();
  return [...h2Titles, ...h3Titles];
};

export { scrapeGamespotWorker };
