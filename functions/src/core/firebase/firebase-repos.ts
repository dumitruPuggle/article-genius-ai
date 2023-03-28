export const ScheduledTitlesRepoName = "ScheduledTitlesRepo";

export const ScheduledTitlesRepo = (db: FirebaseFirestore.Firestore) =>
  db.collection(ScheduledTitlesRepoName);

export const scheduledArticlesDoc = "scheduledTitles";

export const scheduledArticlesDocTitles = async (
  db: FirebaseFirestore.Firestore
) =>
  await (await ScheduledTitlesRepo(db).doc(scheduledArticlesDoc).get()).data();
