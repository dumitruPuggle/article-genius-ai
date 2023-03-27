import { CloudPuppeteer } from "./versions/cloud-puppeteer-version";
import { MacOSPuppeteer } from "./versions/mac-puppeteer";

type BrowserHeadlessAuto = "auto";

interface IBrowserParams {
  launchWindow: boolean | BrowserHeadlessAuto;
}
export class Browser {
  private headless: boolean;

  private get isLocal() {
    return (
      process.env.FUNCTIONS_EMULATOR === "true" || process.env.IS_TESTING_ENV
    );
  }

  constructor(params: IBrowserParams = { launchWindow: "auto" }) {
    if (params.launchWindow === "auto") {
      this.headless = this.HeadlessAuto;
    } else {
      this.headless = !params.launchWindow;
    }
  }

  private get HeadlessAuto() {
    return !this.headless && !this.isLocal;
  }

  async autoDetect() {
    if (this.isLocal) {
      // Return an local puppeteer version
      return await MacOSPuppeteer.getBrowserInstance(this.headless);
    } else {
      // Return an cloud puppeteer version
      return await CloudPuppeteer.getBrowserInstance();
    }
  }
}
