import { PuppeteerBrowserInstance } from "../chromium/os-path-executables";

const scrapeWebsite = async () => {
  const browser = await PuppeteerBrowserInstance();

  try {
    const page = await browser.newPage();

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

    await page.goto("https://www.gamespot.com/", {
      waitUntil: "networkidle0",
    });

    // // Get an array of the first 10 h2 elements
    // const h2Elements = await page.$$eval("h2", (els) => els.slice(0, 10));

    // // Get the text content of each h2 element
    // const h2Text = await Promise.all(h2Elements);

    return await page.title();
  } catch (error) {
    return error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

export { scrapeWebsite };
