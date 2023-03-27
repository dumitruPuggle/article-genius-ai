import { scrapeGamespot } from "../scrape-gamespot";

test("Check if scrapeGamespot func works", async () => {
  await scrapeGamespot();
});
