import { NestFactory } from '@nestjs/core';
import { LineModule } from './line.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(LineModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3002);
  console.log('Running line at port: 3002');
}
bootstrap();
