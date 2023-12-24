import { Injectable } from '@nestjs/common';

@Injectable()
export class LineService {
  getHello(): string {
    return 'Hello World!';
  }
}
