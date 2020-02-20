import { Identity } from '@shared/domain/Identity';

export class DomainEventId extends Identity {
  private _value: string;

  constructor(value: string) {
    super();
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}
