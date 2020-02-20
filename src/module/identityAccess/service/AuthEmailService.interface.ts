import { Email } from '@identityAccess/domain/emailAuthentication/Email';
import { AuthenticationKey } from '@identityAccess/domain/emailAuthentication/AuthKey';

export interface IAuthEmailService {
  sendAuthenticationEmail(email: Email, authenticationKey: AuthenticationKey): Promise<void>;
}

export const IAuthEmailServiceSymbol = 'IAuthEmailService';
