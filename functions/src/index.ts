import * as functions from "firebase-functions";
import { scrapeWebsite } from "./core/scraping";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.scrape = functions
  .runWith({ timeoutSeconds: 120, memory: "2GB" })
  .region("us-central1")
  .https.onRequest(async (request, response) => {
    const stories = await scrapeWebsite();
    response.type("json").send(stories);
  });
