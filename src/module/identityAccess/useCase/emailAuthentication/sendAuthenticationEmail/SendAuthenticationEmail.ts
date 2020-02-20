import { Inject } from '@nestjs/common';

import { ISendAuthenticationEmailUseCase } from '@identityAccess/useCase/emailAuthentication/sendAuthenticationEmail/SendAuthenticationEmail.useCase.interface';
import { ISendAuthenticationEmailRequest } from '@identityAccess/useCase/emailAuthentication/sendAuthenticationEmail/SendAuthenticationEmail.request';
import {
  IEmailAuthenticationRepository,
  IEmailAuthenticationRepositorySymbol,
} from '@identityAccess/service/EmailAuthentication.repository.interface';
import { IAuthEmailService, IAuthEmailServiceSymbol } from '@identityAccess/service/AuthEmailService.interface';
import { EmailAuthenticationFactory } from '@identityAccess/domain/emailAuthentication/EmailAuthentication.factory';
import { Email } from '@identityAccess/domain/emailAuthentication/Email';

export class SendAuthenticationEmail implements ISendAuthenticationEmailUseCase {
  constructor(
    @Inject(IEmailAuthenticationRepositorySymbol)
    private readonly emailAuthenticationRepo: IEmailAuthenticationRepository,
    @Inject(IAuthEmailServiceSymbol)
    private readonly authEmailService: IAuthEmailService,
  ) {}

  async execute(request: ISendAuthenticationEmailRequest): Promise<void> {
    const emailAuthenticationId = this.emailAuthenticationRepo.nextId();
    const emailAuthentication = EmailAuthenticationFactory.create(emailAuthenticationId, new Email(request.email));
    await this.emailAuthenticationRepo.save(emailAuthentication);

    await this.authEmailService.sendAuthenticationEmail(
      emailAuthentication.email,
      emailAuthentication.authenticationKey,
    );
  }
}
