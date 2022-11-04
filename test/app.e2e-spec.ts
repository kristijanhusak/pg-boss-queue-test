import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('test1', async () => {
    await sleep(1000);
  });

  it('test2', async () => {
    await sleep(1000);
  });

  it('test3', async () => {
    await sleep(1000);
  });

  it('test4', async () => {
    await sleep(1000);
  });

  it('test5', async () => {
    await sleep(1000);
  });

  it('test6', async () => {
    await sleep(1000);
  });

  it('test7', async () => {
    await sleep(1000);
  });
});
