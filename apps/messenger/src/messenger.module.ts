import { Module } from '@nestjs/common';
import { MessengerController } from './messenger.controller';
import { MessengerService } from './messenger.service';
import { ConvertMessageHandler } from '@app/platform-message-converter';

@Module({
  imports: [],
  controllers: [MessengerController],
  providers: [MessengerService, ConvertMessageHandler],
})
export class MessengerModule {}
