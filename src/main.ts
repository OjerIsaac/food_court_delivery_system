import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: process.env.RABBITMQ_QUEUE_NAME,
      queueOptions: {
        durable: process.env.RABBITMQ_QUEUE_DURABLE,
      },
    },
  });

  const logger = new Logger('NestMicroservice');

  await app.listen();

  logger.log('Microservice is listening');
}

bootstrap();
