export type ReceiveMessageWebhook = {
  id: string;
  username: string;
  message: string;
  attachments?: [string];
};
