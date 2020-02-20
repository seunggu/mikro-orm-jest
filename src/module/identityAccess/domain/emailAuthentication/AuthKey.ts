import { IsString } from 'class-validator';

import { ValueObject } from '@shared/domain/ValueObject';
import { Guard } from '@shared/utils/Guard';

export class AuthenticationKey extends ValueObject<AuthenticationKey> {
  @IsString()
  private _value: string;

  constructor(value: string) {
    super();
    this._value = value;
    Guard.validate(this);
  }

  get value(): string {
    return this._value;
  }
}
