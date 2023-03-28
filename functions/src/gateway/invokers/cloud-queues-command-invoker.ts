import { PublishRegeneratedTitlesCommand } from "../use-cases/regenerate-titles/commands/publish-regenerated-titles-command";

export enum CloudCommandQueue {
  PUBLISH_REGENERATED_TITLES = 0,
}

export class CloudQueuesCommandInvoker {
  static async executeCommand(commandId: CloudCommandQueue) {
    if (commandId === CloudCommandQueue.PUBLISH_REGENERATED_TITLES) {
      const command = new PublishRegeneratedTitlesCommand();
      await command.execute();
    }
    return;
  }
}
