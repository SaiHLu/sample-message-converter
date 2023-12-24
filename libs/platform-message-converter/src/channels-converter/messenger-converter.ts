import { ReceiveMessageWebhook } from 'apps/messenger/src/types';
import { PlatformMessage } from '../types';
import { PlatformMessageConvert } from '../interfaces/platform-message-convert';

export class MessengerConverter implements PlatformMessageConvert {
  convert(data: ReceiveMessageWebhook): PlatformMessage {
    const platformMessage: PlatformMessage = {
      userId: data.id,
      attachments: data.attachments,
      message: data.message,
      userInfo: {
        nickName: data.userInfo.nickName,
      },
    };

    return platformMessage;
  }
}
