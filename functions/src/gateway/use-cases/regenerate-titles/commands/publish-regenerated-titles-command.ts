import { Configuration, OpenAIApi } from "openai";
import { scrapeGamespotWorker } from "../workers/scrape-gamespot-worker";

export class PublishRegeneratedTitlesCommand {
  async execute(): Promise<string[]> {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const titles = await scrapeGamespotWorker();

    const regenerateTitles = titles.map(async (storyTitle) => {
      return (
        (
          await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Please recreate the title of this article: '${storyTitle}' for a news site.`,
          })
        ).data.choices[0].text ?? ""
      );
    });

    try {
      const newTitles = await Promise.all(regenerateTitles);
      return newTitles;
    } catch (e) {}
    return [""];
  }
}
