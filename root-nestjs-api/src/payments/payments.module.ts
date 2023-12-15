import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://nats'],
        },
      },
    ]),
  ],
  controllers: [PaymentsController],
  providers: [],
})
export class PaymentsModule {}
