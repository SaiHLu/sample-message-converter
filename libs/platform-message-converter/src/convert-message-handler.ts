import { Injectable } from '@nestjs/common';
import { ChannelType } from './enums';
import { LineConverter, MessengerConverter } from './channels-converter';

@Injectable()
export class ConvertMessageHandler {
  private readonly sources = {
    [ChannelType.LINE]: new LineConverter(),
    [ChannelType.MESSENGER]: new MessengerConverter(),
  };

  convert(data: any, channelType: ChannelType) {
    return this.sources[channelType].convert(data);
  }
}
