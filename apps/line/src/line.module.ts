import { Module } from '@nestjs/common';
import { LineController } from './line.controller';
import { LineService } from './line.service';
import { ConvertMessageHandler } from '@app/platform-message-converter';

@Module({
  imports: [],
  controllers: [LineController],
  providers: [LineService, ConvertMessageHandler],
})
export class LineModule {}
