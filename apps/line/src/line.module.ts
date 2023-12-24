import { Module } from '@nestjs/common';
import { LineController } from './line.controller';
import { LineService } from './line.service';

@Module({
  imports: [],
  controllers: [LineController],
  providers: [LineService],
})
export class LineModule {}
