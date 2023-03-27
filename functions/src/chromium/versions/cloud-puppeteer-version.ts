import puppeteer = require("puppeteer");
import chromium = require("@sparticuz/chromium");

export namespace CloudPuppeteer {
  export async function getBrowserInstance() {
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }
}
