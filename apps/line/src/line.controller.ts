import { Body, Controller, Post } from '@nestjs/common';
import {
  ConvertMessageHandler,
  LineConverter,
} from '@app/platform-message-converter';
import { ReceiveMessageDto } from './dto/receive-message.dto';

@Controller()
export class LineController {
  private readonly convertMessageHandler: ConvertMessageHandler;

  constructor() {
    this.convertMessageHandler = new ConvertMessageHandler(new LineConverter());
  }

  @Post('webhook')
  receiveMessage(@Body() data: ReceiveMessageDto) {
    return this.convertMessageHandler.convert(data);
  }
}
