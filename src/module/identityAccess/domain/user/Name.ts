import { IsString, MaxLength, MinLength } from 'class-validator';

import { ValueObject } from '@shared/domain/ValueObject';
import { Guard } from '@shared/utils/Guard';

export class Name extends ValueObject<Name> {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
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
