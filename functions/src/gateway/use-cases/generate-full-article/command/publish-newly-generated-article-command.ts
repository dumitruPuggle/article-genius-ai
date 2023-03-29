import { getFirestore } from "firebase-admin/firestore";
import { productionArticles } from "../../../../core/firebase/firebase-repos";
import { ICloudFirestoreCommandInvokerParams } from "../../../invokers/cloud-firestore-command-invoker";
import { generateArticleFromTitleWorker } from "../workers/generate-article-from-title-worker";

export class PublishNewlyGeneratedArticle {
  async execute(params: ICloudFirestoreCommandInvokerParams) {
    const titles = params.change.after.data().data;
    const generateArticlesQueue = titles.map(async (title: string) => {
      return {
        title,
        ...(await generateArticleFromTitleWorker(title)),
      };
    });
    const articles = await Promise.all(generateArticlesQueue);
    const db = getFirestore();
    (await productionArticles(db)).create({
      articles,
    });
  }
}
