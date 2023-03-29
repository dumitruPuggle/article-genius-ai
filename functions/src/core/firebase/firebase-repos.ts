export const ScheduledTitlesRepoName = "ScheduledTitlesRepo";

export const ScheduledTitlesRepo = (db: FirebaseFirestore.Firestore) =>
  db.collection(ScheduledTitlesRepoName);

export const scheduledArticlesDoc = "scheduledTitles";

export const scheduledArticlesDocTitles = async (
  db: FirebaseFirestore.Firestore
) => ScheduledTitlesRepo(db).doc(scheduledArticlesDoc);

export const productionArticlesRepoName = "ProductionArticles";
export const articles = "public";

export const productionArticles = async (db: FirebaseFirestore.Firestore) =>
  db.collection(productionArticlesRepoName).doc(articles);
