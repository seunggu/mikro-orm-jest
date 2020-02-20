import { Identity } from '@shared/domain/Identity';
import { Entity } from '@shared/domain/Entity';

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

class User extends Entity<UserId> {
  constructor(userId: UserId) {
    super(userId);
  }
}

describe('Entity', () => {
  let user: User;
  let sameUser: User;
  let anotherUser: User;

  beforeAll(() => {
    user = new User(new UserId('key'));
    sameUser = new User(new UserId('key'));
    anotherUser = new User(new UserId('another key'));
  });

  describe('.identical()', () => {
    it('should return true when same id', () => {
      const result = user.identical(sameUser);
      expect(result).toBe(true);
    });

    it('should return false when different id', () => {
      const result = user.identical(anotherUser);
      expect(result).toBe(false);
    });
  });
});
