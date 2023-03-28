import * as functions from "firebase-functions";
import {
  CloudQueuesCommandInvoker,
  CloudCommandQueue,
} from "./gateway/invokers/cloud-queues-command-invoker";
import { initializeApp } from "firebase-admin/app";
import {
  CloudFirestoreCommandInvoker,
  CloudFirestoreCommandQueue,
} from "./gateway/invokers/cloud-firestore-command-invoker";
// import {
//   scheduledArticlesDoc,
//   ScheduledTitlesRepoName,
// } from "./core/firebase/firebase-repos";
// import {
//   CloudFirestoreCommandInvoker,
//   CloudFirestoreCommandQueue,
// } from "./gateway/invokers/cloud-firestore-command-invoker";

initializeApp();

exports.gamespot_scheduled_scraping = functions
  .runWith({ memory: "2GB" })
  .pubsub.schedule("5 11 * * *")
  .timeZone("America/New_York")
  .onRun(async () => {
    await CloudQueuesCommandInvoker.executeCommand(
      CloudCommandQueue.PUBLISH_REGENERATED_TITLES
    );
  });

// exports.articleWriter = functions.firestore
//   .document(`${ScheduledTitlesRepoName}/${scheduledArticlesDoc}`)
//   .onUpdate(async (change, context) => {
//     console.log("UPDATED");
//     // await CloudFirestoreCommandInvoker.executeCommand(
//     //   CloudFirestoreCommandQueue.PUBLISH_NEWLY_GENERATED_ARTICLE
//     // );
//   });

exports.scrape = functions
  .runWith({ timeoutSeconds: 500, memory: "2GB" })
  .region("us-central1")
  .https.onRequest(async (request, response) => {
    await CloudQueuesCommandInvoker.executeCommand(
      CloudCommandQueue.PUBLISH_REGENERATED_TITLES
    );
    await CloudFirestoreCommandInvoker.executeCommand(
      CloudFirestoreCommandQueue.PUBLISH_NEWLY_GENERATED_ARTICLE
    );
    response.send(200);
  });
