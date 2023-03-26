import puppeteer = require("puppeteer-core");
import chromium = require("@sparticuz/chromium");

export const MAC_OS_ARM = `${__dirname
  .replace("lib", "src")
  .replace("core", "")}/chrome-mac/Chromium.app/Contents/MacOS/Chromium`;

export const PuppeteerBrowserInstance = async () => {
  return puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });
};
