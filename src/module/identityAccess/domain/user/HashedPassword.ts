import { IsString, MaxLength } from 'class-validator';

import { ValueObject } from '@shared/domain/ValueObject';
import { Guard } from '@shared/utils/Guard';

export class HashedPassword extends ValueObject<HashedPassword> {
  @IsString()
  @MaxLength(100)
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
