export type PlatformMessage = {
  userId: string;
  message: string;
  attachments: [string];
  userInfo: {
    nickName: string;
  };
};
