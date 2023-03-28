import { Configuration, OpenAIApi } from "openai";

export class OpenAIService {
  private configuration;
  private openai;

  constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  get setup() {
    return this.openai;
  }
}
