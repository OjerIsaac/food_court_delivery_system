import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { envVarsSchema } from './helpers';
import { DatabaseModule } from './database';
import { RabbitMQListenerService } from './rabbitmq-listener.service';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema: envVarsSchema,
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [RabbitMQListenerService],
})
export class AppModule {}
