import { Body, Controller, Post } from '@nestjs/common';
import {
  ChannelType,
  ConvertMessageHandler,
} from '@app/platform-message-converter';
import { ReceiveMessageDto } from './dto/receive-message.dto';

@Controller()
export class MessengerController {
  constructor(private readonly convertMessageHandler: ConvertMessageHandler) {
    // this.convertMessageHandler = new ConvertMessageHandler(
    //   new MessengerConverter(),
    // );
  }

  @Post('webhook')
  receiveMessage(@Body() data: ReceiveMessageDto) {
    return this.convertMessageHandler.convert(data, ChannelType.MESSENGER);
  }
}
