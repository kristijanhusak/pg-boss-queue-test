import { Injectable } from '@nestjs/common';
import * as PgBoss from 'pg-boss';

@Injectable()
export class QueuesService {
  private client: PgBoss;
  constructor() {
    const url = process.env.DB_URL || 'postgres://postgres:pg_boss_db_password@postgres_db:5432/pg_boss_dev?sslmode=disable';
    this.client = new PgBoss(url);
  }

  async start() {
    return this.client.start();
  }

  async work(queueName: string, handler: (job: any) => Promise<void>) {
    return this.client.work(queueName, handler);
  }

  send(queue: string, message: string) {
    return this.client.send(queue, { message });
  }
}
