import { validateSync, ValidationError } from 'class-validator';
import { MessageFormatter } from 'class-validator-message-formatter';

import { InvalidDomainException } from '@shared/utils/error/InvalidDomainException';

export class Guard {
  static validate(obj: object): void {
    const errors = validateSync(obj, {
      whitelist: false,
      validationError: { target: false, value: false },
    });

    if (errors.length > 0) {
      const message = Guard.errorToString(errors);
      throw new InvalidDomainException(message);
    }
  }

  static errorToString(errors: ValidationError[]): string {
    const messages = MessageFormatter.format(errors).map(error => error.message);
    return `[${messages.join(', ')}]`;
  }
}
