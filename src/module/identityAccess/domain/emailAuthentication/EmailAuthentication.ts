import { AggregateRoot } from '@shared/domain/Aggregate';
import { UnprocessableException } from '@shared/utils/error/UnprocessableException';
import { Email } from '@identityAccess/domain/emailAuthentication/Email';
import { AuthenticationKey } from '@identityAccess/domain/emailAuthentication/AuthKey';
import { EmailAuthenticationId } from '@identityAccess/domain/emailAuthentication/EmailAuthenticationId';

export class EmailAuthentication extends AggregateRoot<EmailAuthenticationId> {
  private _email: Email;
  private _authenticationKey: AuthenticationKey;
  private _authenticated: boolean;

  constructor(id: EmailAuthenticationId, email: Email, authenticationKey: AuthenticationKey, authenticated: boolean) {
    super(id);
    this._email = email;
    this._authenticationKey = authenticationKey;
    this._authenticated = authenticated;
  }

  get email(): Email {
    return this._email;
  }

  get authenticationKey(): AuthenticationKey {
    return this._authenticationKey;
  }

  get authenticated(): boolean {
    return this._authenticated;
  }

  public verify(key: AuthenticationKey): void {
    if (this.authenticated) throw new UnprocessableException('the email is already authenticated');
    if (!this._authenticationKey.equals(key)) throw new UnprocessableException('authentication key must be valid');
    this._authenticated = true;
  }
}
