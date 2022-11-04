import { Controller, Get, Param } from '@nestjs/common';
import { QueuesService } from './queues/queues.service';

@Controller()
export class AppController {
  constructor(private queuesService: QueuesService) {}

  @Get()
  getHello() {
    return { message: 'ok' };
  }

  @Get('queue/:message')
  async queueMessage(@Param('message') message: string) {
    return this.queuesService.send('test-message', message);
  }
}
