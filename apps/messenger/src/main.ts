import { NestFactory } from '@nestjs/core';
import { MessengerModule } from './messenger.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessengerModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3001);
  console.log('Running messenger at port: 3001');
}
bootstrap();
