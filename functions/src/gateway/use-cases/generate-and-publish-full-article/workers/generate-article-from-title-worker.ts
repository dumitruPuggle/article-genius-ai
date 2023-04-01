import { OpenAIService } from "../../../../core/api-services/open-ai/open-ai-api-service";

const prompt = (title: string) =>
  `generate for ${title}: 1000 words. it should have 5 paragraphs`;

export const generateArticleFromTitleWorker = async (title: string) => {
  const openai = new OpenAIService().setup;
  const bodyText = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt(title),
    max_tokens: 1000,
  });
  const getSubject = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `What is the subject of ${title}?`,
    max_tokens: 150,
  });
  return {
    bodyText: bodyText.data.choices[0].text,
    articleSubject: getSubject.data.choices[0].text,
  };
};
