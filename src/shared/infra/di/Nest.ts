import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from '@shared/infra/di/AppModule';

export class Nest {
  private readonly _app: INestApplication;

  private constructor(app: INestApplication) {
    this._app = app;
  }

  get app(): INestApplication {
    return this._app;
  }

  static async create(): Promise<Nest> {
    const app = await NestFactory.create(AppModule);
    return new Nest(app);
  }
}
