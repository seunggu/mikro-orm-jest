export abstract class ValueObject<TValueObject extends ValueObject<TValueObject>> {
  public copy(): TValueObject {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  public equals(other: TValueObject): boolean {
    return other instanceof this.constructor && this.hashCode() === other.hashCode();
  }

  protected hashCode(): string {
    return JSON.stringify(this);
  }
}
