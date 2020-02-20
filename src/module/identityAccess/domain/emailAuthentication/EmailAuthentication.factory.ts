import { EmailAuthenticationId } from '@identityAccess/domain/emailAuthentication/EmailAuthenticationId';
import { Email } from '@identityAccess/domain/emailAuthentication/Email';
import { EmailAuthentication } from '@identityAccess/domain/emailAuthentication/EmailAuthentication';
import { TextUtil } from '@shared/utils/TextUtil';
import { AuthenticationKey } from '@identityAccess/domain/emailAuthentication/AuthKey';

export class EmailAuthenticationFactory {
  static create(id: EmailAuthenticationId, email: Email): EmailAuthentication {
    const uniqueKey = TextUtil.generateUniqueNames();
    return new EmailAuthentication(id, email, new AuthenticationKey(uniqueKey), false);
  }

  static reconstitute(
    id: string,
    email: string,
    authenticationKey: string,
    authenticated: boolean,
  ): EmailAuthentication {
    return new EmailAuthentication(
      new EmailAuthenticationId(id),
      new Email(email),
      new AuthenticationKey(authenticationKey),
      authenticated,
    );
  }
}
