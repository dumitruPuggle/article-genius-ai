import * as functions from "firebase-functions";
import { scrapeGamespot } from "./core/scraping";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(
  async (request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    await scrapeGamespot();
    response.send("Hello from Firebase!");
  }
);

// exports.scheduledFunction = functions.pubsub
//   .schedule("every 5 minutes")
//   .onRun(async (context) => {
//     await scrapeGamespot();
//   });
