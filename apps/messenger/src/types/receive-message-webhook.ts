export type ReceiveMessageWebhook = {
  id: string;
  username: string;
  message: string;
  attachments?: [string];
  profileUrl: string;
  userInfo: {
    nickName: string;
  };
};
