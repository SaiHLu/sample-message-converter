import { ReceiveMessageWebhook } from 'apps/messenger/src/types';
import { PlatformMessage } from '../types';
import { PlatformMessageConvert } from '../interfaces/platform-message-convert';
import { Logger } from '@nestjs/common';

export class MessengerConverter implements PlatformMessageConvert {
  private readonly logger = new Logger(MessengerConverter.name);

  convert(data: ReceiveMessageWebhook): PlatformMessage {
    this.logger.debug('Messenger Converter');

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
