import { QueryDocumentSnapshot } from "firebase-admin/firestore";
import { ParamsOf } from "firebase-functions/lib/common/params";
import { Change, EventContext } from "firebase-functions/v1";
import { Path } from "typescript";
import { PublishNewlyGeneratedArticle } from "../use-cases/generate-full-article/command/publish-newly-generated-article-command";

export enum CloudFirestoreCommandQueue {
  PUBLISH_NEWLY_GENERATED_ARTICLE = 1,
}

export interface ICloudFirestoreCommandInvokerParams {
  change: Change<QueryDocumentSnapshot>;
  context: EventContext<ParamsOf<Path>>;
}

export class CloudFirestoreCommandInvoker {
  static async executeCommand(
    commandId: CloudFirestoreCommandQueue,
    params: ICloudFirestoreCommandInvokerParams
  ) {
    if (
      commandId === CloudFirestoreCommandQueue.PUBLISH_NEWLY_GENERATED_ARTICLE
    ) {
      const command = new PublishNewlyGeneratedArticle();
      await command.execute(params);
    }
    return;
  }
}
