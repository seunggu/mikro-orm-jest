import { IRepository } from '@shared/core/Repository.interface';
import { EmailAuthentication } from '@identityAccess/domain/emailAuthentication/EmailAuthentication';
import { EmailAuthenticationId } from '@identityAccess/domain/emailAuthentication/EmailAuthenticationId';

export interface IEmailAuthenticationRepository extends IRepository<EmailAuthentication> {
  nextId(): EmailAuthenticationId;
  findEmailAuthenticationById(id: EmailAuthenticationId): Promise<EmailAuthentication | null>;
}

export const IEmailAuthenticationRepositorySymbol = Symbol('IEmailAuthenticationRepository');
