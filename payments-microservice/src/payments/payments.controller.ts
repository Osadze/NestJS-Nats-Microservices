import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';

@Controller()
export class PaymentsController {
  @MessagePattern({ cmd: 'getPayments' })
  getPayments(@Payload() data: any) {
    console.log(data);
    return data;
  }
}
