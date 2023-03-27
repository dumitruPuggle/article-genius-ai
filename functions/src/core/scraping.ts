import { Browser } from "../chromium/browser";

const scrapeWebsite = async (): Promise<string[]> => {
  const browser = await new Browser({ launchWindow: false }).autoDetect();

  let stories: string[] = [];
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

  await page.goto("https://www.nytimes.com/", {
    waitUntil: "networkidle0",
  });

  const storySelector = "section.story-wrapper h3";

  // Only get the top 10 headlines
  stories = await page.$$eval(storySelector, (divs) =>
    divs.slice(0, 10).map((div, index) => `${index + 1}. ${div.innerHTML}`)
  );

  browser.close();
  return stories;
};

export { scrapeWebsite };
