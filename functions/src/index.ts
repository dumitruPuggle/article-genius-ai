import * as functions from "firebase-functions";
import { Configuration, OpenAIApi } from "openai";
import { scrapeGamespot } from "./core/scrapers/gamespot/scrape-gamespot";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.scrape = functions
  .runWith({ timeoutSeconds: 120, memory: "2GB" })
  .region("us-central1")
  .https.onRequest(async (request, response) => {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const stories = await scrapeGamespot();

    try {
      const regenerateResponses = stories.map(async (storyTitle) => {
        return (
          await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Please recreate the title of this article: '${storyTitle}' for a news site.`,
          })
        ).data.choices[0].text;
      });

      const newTitles = await Promise.all(regenerateResponses);
      response.type("html").send(newTitles.join("<br>"));
    } catch (e) {
      console.log(e);
      response
        .type("html")
        .send(
          [
            "<strong>UNFORTUNATELY OPENAI REFUSED TO RESPOND, HERE'S THE SCRAPED DATA:</strong>",
            ...stories,
          ].join("<br>")
        );
    }
  });
