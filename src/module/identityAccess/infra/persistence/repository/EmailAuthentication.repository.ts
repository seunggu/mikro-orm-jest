import { EntityManager } from 'mikro-orm';
import { v1 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

import { IEmailAuthenticationRepository } from '@identityAccess/service/EmailAuthentication.repository.interface';
import { EmailAuthenticationId } from '@identityAccess/domain/emailAuthentication/EmailAuthenticationId';
import { EmailAuthentication } from '@identityAccess/domain/emailAuthentication/EmailAuthentication';
import { EmailAuthenticationMapper } from '@identityAccess/infra/persistence/mapper/EmailAuthentication.mapper';
import { EmailAuthentication as EmailAuthenticationEntity } from '@identityAccess/infra/persistence/entity/EmailAuthentication.entity';

@Injectable()
export class EmailAuthenticationRepository implements IEmailAuthenticationRepository {
  constructor(private readonly em: EntityManager, private readonly mapper: EmailAuthenticationMapper) {}

  public nextId(): EmailAuthenticationId {
    return new EmailAuthenticationId(uuid());
  }

  public async findEmailAuthenticationById(id: EmailAuthenticationId): Promise<EmailAuthentication | null> {
    const persistence = await this.em.findOne(EmailAuthenticationEntity, id.value);
    if (persistence === null) return null;
    return this.mapper.toDomain(persistence);
  }

  public async save(emailAuthentication: EmailAuthentication): Promise<void> {
    const persistence = this.mapper.toPersistence(emailAuthentication);
    await this.em.persistAndFlush(persistence);
  }

  public async remove(emailAuthentication: EmailAuthentication): Promise<void> {
    const persistence = this.mapper.toPersistence(emailAuthentication);
    await this.em.removeAndFlush(persistence);
  }
}
