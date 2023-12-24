import { ReceiveMessageWebhook } from 'apps/line/src/types';
import { PlatformMessage } from '../types';
import { PlatformMessageConvert } from '../interfaces/platform-message-convert';
import { Logger } from '@nestjs/common';

export class LineConverter implements PlatformMessageConvert {
  private readonly logger = new Logger(LineConverter.name);

  convert(data: ReceiveMessageWebhook): PlatformMessage {
    this.logger.debug('LineConverter Converter');

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
