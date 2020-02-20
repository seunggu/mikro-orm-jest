import { BaseException } from '@shared/utils/error/BaseEexception';
import { ExceptionType } from '@shared/utils/error/exceptionType.enum';

export class InvalidDomainException extends BaseException {
  constructor(message: string) {
    super(ExceptionType.INVALID_DOMAIN, message);
  }
}
