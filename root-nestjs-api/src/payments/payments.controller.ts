import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  createPayment() {}

  @Get()
  getPayments() {
    return this.natsClient.send({ cmd: 'getPayments' }, {});
  }
}
