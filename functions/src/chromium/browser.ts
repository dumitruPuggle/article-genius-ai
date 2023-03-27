import puppeteer = require("puppeteer-core");
import chromium = require("@sparticuz/chromium");
import { MAC_OS_ARM } from "./os-path-executables";

type BrowserHeadlessAuto = "auto";

interface IBrowserParams {
  launchWindow: boolean | BrowserHeadlessAuto;
}

export class Browser {
  private headless: boolean;

  private get isLocal() {
    return process.env.FUNCTIONS_EMULATOR === "true";
  }

  constructor(params: IBrowserParams = { launchWindow: "auto" }) {
    if (params.launchWindow === "auto") {
      this.headless = this.HeadlessAuto;
    } else {
      this.headless = !params.launchWindow;
    }
  }

  async chromiumCloudExecutable() {
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }

  private get HeadlessAuto() {
    return !this.headless && !this.isLocal;
  }

  async autoDetect() {
    const args = this.isLocal ? undefined : chromium.args;
    const defaultViewport = this.isLocal ? undefined : chromium.defaultViewport;
    const executablePath = this.isLocal
      ? MAC_OS_ARM
      : await chromium.executablePath();
    const headless = this.headless;

    return puppeteer.launch({
      args,
      defaultViewport,
      executablePath,
      headless,
    });
  }
}
