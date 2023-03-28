import * as functions from "firebase-functions";
import {
  CloudQueuesCommandInvoker,
  CloudCommandQueue,
} from "./gateway/invokers/cloud-queues-command-invoker";
const { initializeApp } = require("firebase-admin/app");

initializeApp({
  apiKey: "AIzaSyBx6a0ht1KP3WJYELn_u_Q_M4ECwljwoSY",
  authDomain: "articlegenius-ai.firebaseapp.com",
  projectId: "articlegenius-ai",
  storageBucket: "articlegenius-ai.appspot.com",
  messagingSenderId: "676688590911",
  appId: "1:676688590911:web:086a8d15fea3feb55d208a",
});

exports.gamespot_scheduled_scraping = functions.pubsub
  .schedule("every 5 minutes")
  .timeZone("GMT+3")
  .onRun(async () => {
    await CloudQueuesCommandInvoker.executeCommand(
      CloudCommandQueue.PUBLISH_REGENERATED_TITLES
    );
  });

exports.scrape = functions
  .runWith({ timeoutSeconds: 120, memory: "2GB" })
  .region("us-central1")
  .https.onRequest(async (request, response) => {
    await CloudQueuesCommandInvoker.executeCommand(
      CloudCommandQueue.PUBLISH_REGENERATED_TITLES
    );
    response.send(200);
  });
