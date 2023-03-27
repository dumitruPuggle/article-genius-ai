import puppeteer = require("puppeteer");
import chromium = require("@sparticuz/chromium");
import { MAC_OS_ARM } from "../os-path-executables";

export namespace MacOSPuppeteer {
  export async function getBrowserInstance(headless: boolean) {
    return puppeteer.launch({
      args: [],
      defaultViewport: chromium.defaultViewport,
      executablePath: MAC_OS_ARM,
      headless,
    });
  }
}
