import { Browser } from "puppeteer";

type PageAddress = string;

export class Scrapper {
  public browser: Browser;
  constructor(browser: Browser) {
    this.browser = browser;
  }
  protected get newPage() {
    return this.browser.newPage();
  }

  async pageWithLowNetwork(pageURL: PageAddress) {
    const page = await this.newPage;
    await page.setViewport({ width: 1280, height: 720 });

    // Block images, videos, fonts from downloading
    await page.setRequestInterception(true);
    page.on("request", (interceptedRequest) => {
      const blockResources = ["script", "stylesheet", "image", "media", "font"];
      if (blockResources.includes(interceptedRequest.resourceType())) {
        interceptedRequest.abort();
      } else {
        interceptedRequest.continue();
      }
    });

    // Change the user agent of the scraper
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
    );

    await page.goto(pageURL, {
      waitUntil: "networkidle0",
    });

    return page;
  }
}
