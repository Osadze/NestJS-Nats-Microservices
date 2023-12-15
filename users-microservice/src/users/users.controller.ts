import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';

@Controller()
export class UsersController {
  @MessagePattern({ cmd: 'getUsers' })
  getUsers(@Payload() data: any) {
    console.log(data);
    return data;
  }
}
