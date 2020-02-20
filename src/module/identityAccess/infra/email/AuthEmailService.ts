import { Inject } from '@nestjs/common';

import { IAuthEmailService } from '@identityAccess/service/AuthEmailService.interface';
import { Email } from '@identityAccess/domain/emailAuthentication/Email';
import { AuthenticationKey } from '@identityAccess/domain/emailAuthentication/AuthKey';
import { IEmailService, IEmailServiceSymbol } from '@shared/service/EmailService.interface';

export class AuthEmailService implements IAuthEmailService {
  static SENDER = 'no-reply@ninehire.com';

  constructor(
    @Inject(IEmailServiceSymbol)
    private readonly emailService: IEmailService,
  ) {}

  async sendAuthenticationEmail(email: Email, authenticationKey: AuthenticationKey): Promise<void> {
    const subject = '나인하이어 인증키입니다';
    const content = `인증키: ${authenticationKey.value}`;
    await this.emailService.sendEmail(AuthEmailService.SENDER, email.value, subject, content);
  }
}
