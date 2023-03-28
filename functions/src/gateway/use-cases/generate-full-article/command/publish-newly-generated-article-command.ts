import { getFirestore } from "firebase-admin/firestore";
import { scheduledArticlesDocTitles } from "../../../../core/firebase/firebase-repos";
import { generateArticleFromTitleWorker } from "../workers/generate-article-from-title-worker";

export class PublishNewlyGeneratedArticle {
  async execute() {
    const db = getFirestore();
    const titles = (await scheduledArticlesDocTitles(db))?.data ?? "";
    await generateArticleFromTitleWorker(titles[0]);
  }
}
