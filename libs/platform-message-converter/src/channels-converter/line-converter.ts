import { ReceiveMessageWebhook } from 'apps/line/src/types';
import { PlatformMessage } from '../types';
import { PlatformMessageConvert } from '../interfaces/platform-message-convert';

export class LineConverter implements PlatformMessageConvert {
  convert(data: ReceiveMessageWebhook): PlatformMessage {
    const platformMessage: PlatformMessage = {
      userId: data.id,
      attachments: data.attachments,
      message: data.message,
      userInfo: {
        nickName: data.username,
      },
    };

    return platformMessage;
  }
}
