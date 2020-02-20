import { IsString } from 'class-validator';

import { Guard } from '@shared/utils/Guard';
import { Identity } from '@shared/domain/Identity';

export class EmailAuthenticationId extends Identity {
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
