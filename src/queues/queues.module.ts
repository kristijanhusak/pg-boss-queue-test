import { Module, OnModuleInit } from '@nestjs/common';
import { QueuesService } from './queues.service';
import { QueuesController } from './queues.controller';

@Module({
  controllers: [QueuesController],
  providers: [QueuesService],
  exports: [QueuesService],
})
export class QueuesModule implements OnModuleInit {
  constructor(private readonly queuesService: QueuesService) {}

  async onModuleInit() {
    await this.queuesService.start();
    await this.queuesService.work('test-message', async (job) => {
      console.log(job.data);
    });
  }
}
