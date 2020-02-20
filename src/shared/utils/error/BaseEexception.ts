import { ExceptionType } from '@shared/utils/error/exceptionType.enum';

export abstract class BaseException extends Error {
  public readonly type: ExceptionType;

  constructor(type: ExceptionType, message: string) {
    super(message);
    this.type = type;
    Object.setPrototypeOf(this, BaseException.prototype);
  }
}
