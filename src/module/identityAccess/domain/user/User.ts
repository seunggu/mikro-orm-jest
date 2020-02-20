import { AggregateRoot } from '@shared/domain/Aggregate';
import { UserId } from '@identityAccess/domain/user/UserId';
import { Name } from '@identityAccess/domain/user/Name';
import { Email } from '@identityAccess/domain/emailAuthentication/Email';
import { HashedPassword } from '@identityAccess/domain/user/HashedPassword';
import { ThumbnailURL } from '@identityAccess/domain/user/ThumbnailURL';

export class User extends AggregateRoot<UserId> {
  private _name: Name;
  private _email: Email;
  private _password: HashedPassword;
  private _thumbnailURL: ThumbnailURL | null;

  constructor(userId: UserId) {
    super(userId);
  }
}
