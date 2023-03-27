import * as functions from "firebase-functions";
import { scrapeGamespot } from "./core/scrapers/gamespot/scrape-gamespot";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.scrape = functions
  .runWith({ timeoutSeconds: 120, memory: "2GB" })
  .region("us-central1")
  .https.onRequest(async (request, response) => {
    const stories = await scrapeGamespot();
    response.type("html").send(stories.join("<br>"));
  });
