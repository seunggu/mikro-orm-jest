import { ValueObject } from '@shared/domain/ValueObject';

class Address extends ValueObject<Address> {
  private readonly _postal: number;
  private readonly _city: string;

  constructor(postal: number, city: string) {
    super();
    this._postal = postal;
    this._city = city;
  }

  get postal(): number {
    return this._postal;
  }

  get city(): string {
    return this._city;
  }
}

describe('ValueObject', () => {
  let address: Address;
  let sameAddress: Address;
  let anotherAddress: Address;

  beforeAll(() => {
    address = new Address(63018, 'Busan');
    sameAddress = new Address(63018, 'Busan');
    anotherAddress = new Address(48102, 'Seoul');
  });

  describe('.copy()', () => {
    it('should return a copied instance', () => {
      const result = address.copy();
      expect(result).toBeInstanceOf(Address);
      expect(result.postal).toEqual(address.postal);
      expect(result.city).toEqual(address.city);
    });
  });

  describe('.equal()', () => {
    it('should return true when same', () => {
      const result = address.equals(sameAddress);
      expect(result).toBe(true);
    });

    it('should return false when different', () => {
      const result = address.equals(anotherAddress);
      expect(result).toBe(false);
    });
  });
});
