import { Identity } from '@shared/domain/Identity';

class UserId extends Identity {
  private readonly _value: string;

  constructor(value: string) {
    super();
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}

class OrderId extends Identity {
  private readonly _value: string;

  constructor(value: string) {
    super();
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}

describe('Identity', () => {
  let userId: UserId;
  let sameUserId: UserId;
  let orderId: OrderId;

  beforeAll(() => {
    userId = new UserId('key');
    sameUserId = new UserId('key');
    orderId = new OrderId('key');
  });

  describe('.equal()', () => {
    it('should return true when same', () => {
      const result = userId.equals(sameUserId);
      expect(result).toBe(true);
    });

    it('should return false when different', () => {
      const result = userId.equals(orderId);
      expect(result).toBe(false);
    });
  });
});
