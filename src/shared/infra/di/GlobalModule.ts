import { Module, Global } from '@nestjs/common';

import { IEmailServiceSymbol } from '@shared/service/EmailService.interface';
import { SendGridEmailService } from '@shared/infra/notification/SendGridEmailService';
import { MikroOrmPersistenceModule } from '@shared/infra/persistence/MikroOrmPersistence';

const IEmailService = {
  provide: IEmailServiceSymbol,
  useClass: SendGridEmailService,
};

@Global()
@Module({
  imports: [MikroOrmPersistenceModule],
  providers: [IEmailService],
  exports: [MikroOrmPersistenceModule, IEmailService],
})
export class GlobalModule {}
