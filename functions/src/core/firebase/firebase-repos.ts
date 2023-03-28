export const ScheduledTitlesRepoName = "ScheduledTitlesRepo";

export const ScheduledTitlesRepo = (db: FirebaseFirestore.Firestore) =>
  db.collection(ScheduledTitlesRepoName);

export const scheduledArticlesDoc = "scheduledTitles";
