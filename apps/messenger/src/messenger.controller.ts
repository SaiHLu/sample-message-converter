import { Body, Controller, Post } from '@nestjs/common';
import {
  ConvertMessageHandler,
  MessengerConverter,
} from '@app/platform-message-converter';
import { ReceiveMessageDto } from './dto/receive-message.dto';

@Controller()
export class MessengerController {
  private readonly convertMessageHandler: ConvertMessageHandler;

  constructor() {
    this.convertMessageHandler = new ConvertMessageHandler(
      new MessengerConverter(),
    );
  }

  @Post('webhook')
  receiveMessage(@Body() data: ReceiveMessageDto) {
    return this.convertMessageHandler.convert(data);
  }
}
