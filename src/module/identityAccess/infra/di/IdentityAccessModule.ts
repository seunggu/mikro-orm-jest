import { Module } from '@nestjs/common';

import { SendAuthenticationEmailController } from '@identityAccess/controller/emailAuthentication/sendAuthenticationEmail/SendAuthenticationEmail.controller';
import { IAuthEmailServiceSymbol } from '@identityAccess/service/AuthEmailService.interface';
import { AuthEmailService } from '@identityAccess/infra/email/AuthEmailService';
import { ISendAuthenticationEmailUseCaseSymbol } from '@identityAccess/useCase/emailAuthentication/sendAuthenticationEmail/SendAuthenticationEmail.useCase.interface';
import { SendAuthenticationEmail } from '@identityAccess/useCase/emailAuthentication/sendAuthenticationEmail/SendAuthenticationEmail';
import { IEmailAuthenticationRepositorySymbol } from '@identityAccess/service/EmailAuthentication.repository.interface';
import { EmailAuthenticationRepository } from '@identityAccess/infra/persistence/repository/EmailAuthentication.repository';
import { EmailAuthenticationMapper } from '@identityAccess/infra/persistence/mapper/EmailAuthentication.mapper';
import { MikroOrmFeatureModule } from '@identityAccess/infra/persistence/MikroOrmFeatureModule';

const IAuthEmailService = {
  provide: IAuthEmailServiceSymbol,
  useClass: AuthEmailService,
};
const ISendAuthenticationEmailUseCase = {
  provide: ISendAuthenticationEmailUseCaseSymbol,
  useClass: SendAuthenticationEmail,
};
const IEmailAuthenticationRepository = {
  provide: IEmailAuthenticationRepositorySymbol,
  useClass: EmailAuthenticationRepository,
};

@Module({
  imports: [MikroOrmFeatureModule],
  controllers: [SendAuthenticationEmailController],
  providers: [
    IAuthEmailService,
    ISendAuthenticationEmailUseCase,
    IEmailAuthenticationRepository,
    EmailAuthenticationMapper,
  ],
})
export class IdentityAccessModule {}
