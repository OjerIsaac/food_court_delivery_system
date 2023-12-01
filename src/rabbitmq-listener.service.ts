// rabbitmq-listener.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { connect } from 'amqp-connection-manager';

@Injectable()
export class RabbitMQListenerService {
  private readonly logger = new Logger(RabbitMQListenerService.name);

  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'orders_queue',
      queueOptions: { durable: false },
    },
  })
  client: ClientProxy;

  constructor() {
    this.setup();
  }

  async setup() {
    const connection = connect(['amqp://localhost:5672']);
    const channelWrapper = connection.createChannel({
      json: true,
      setup: channel => channel.assertQueue('orders_queue', { durable: true }),
    });

    await channelWrapper.waitForConnect();

    channelWrapper
      .on('data', data => this.handleMessage(data.content.toString()))
      .on('error', err => {
        this.logger.error(`Error in RabbitMQ channel: ${err}`);
      });

    this.logger.log('RabbitMQ listener connected and waiting for messages.');
  }

  handleMessage(message: string) {
    this.logger.log(`Received message from RabbitMQ: ${message}`);
  }
}
