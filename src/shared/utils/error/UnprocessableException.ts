import { BaseException } from '@shared/utils/error/BaseEexception';
import { ExceptionType } from '@shared/utils/error/exceptionType.enum';

export class UnprocessableException extends BaseException {
  constructor(message: string) {
    super(ExceptionType.UNPROCESSABLE, message);
  }
}
