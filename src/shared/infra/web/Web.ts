import { INestApplication } from '@nestjs/common';
import { WebConfig } from '@config/Web.config';

export class Web {
  static async listen(app: INestApplication): Promise<void> {
    const port = WebConfig.getPort();
    app.enableCors();
    app.listen(port);
  }
}
