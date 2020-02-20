import { Identity } from '@shared/domain/Identity';
import { AggregateRoot } from '@shared/domain/Aggregate';
import { DomainEvent } from '@shared/domain/event/DomainEvent';

class UserId extends Identity {
  private _value: string;

  constructor(value: string) {
    super();
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}

class UserAuthenticed extends DomainEvent {}

class User extends AggregateRoot<UserId> {
  constructor(userId: UserId) {
    super(userId);
  }

  // this method is for testing addDomainEvent
  public authenticated(): void {
    this.addDomainEvent(new UserAuthenticed());
  }
}

describe('Agreegate', () => {
  let user: User;

  beforeAll(() => {
    user = new User(new UserId('key'));
  });

  describe('.addDomainEvent()', () => {
    it('should add domain event', () => {
      expect(user.domainEvents).toHaveLength(0);
      user.authenticated();
      expect(user.domainEvents).toHaveLength(1);
    });
  });
});
