import { Body, Controller, Post } from '@nestjs/common';
import {
  ChannelType,
  ConvertMessageHandler,
} from '@app/platform-message-converter';
import { ReceiveMessageDto } from './dto/receive-message.dto';

@Controller()
export class LineController {
  constructor(private readonly convertMessageHandler: ConvertMessageHandler) {}

  @Post('webhook')
  receiveMessage(@Body() data: ReceiveMessageDto) {
    return this.convertMessageHandler.convert(data, ChannelType.LINE);
  }
}
