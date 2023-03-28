import { OpenAIService } from "../../../../core/api-services/open-ai/open-ai-api-service";

const prompt = (title: string) => `for ${title}:
generate 1k words.
it should have 5 paragraphs
1 youtube link
`;

export const generateArticleFromTitleWorker = async (title: string) => {
  const openai = new OpenAIService().setup;

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt(title),
    });
    console.log(completion.data);
  } catch (e) {}
};
