import { scrapeGamespotWorker } from "../scrape-gamespot-worker";

test("Check if scrapeGamespot func works", async () => {
  await scrapeGamespotWorker();
});
