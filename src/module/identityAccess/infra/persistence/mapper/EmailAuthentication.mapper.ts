import { Injectable } from '@nestjs/common';

import { IMapper } from '@shared/core/Mapper.interface';
import { EmailAuthentication } from '@identityAccess/domain/emailAuthentication/EmailAuthentication';
import { EmailAuthentication as EmailAuthenticationEntity } from '@identityAccess/infra/persistence/entity/EmailAuthentication.entity';
import { EmailAuthenticationFactory } from '@identityAccess/domain/emailAuthentication/EmailAuthentication.factory';

@Injectable()
export class EmailAuthenticationMapper implements IMapper<EmailAuthentication, EmailAuthenticationEntity> {
  public toDomain(persistence: EmailAuthenticationEntity): EmailAuthentication {
    return EmailAuthenticationFactory.reconstitute(
      persistence.id,
      persistence.email,
      persistence.authenticationKey,
      persistence.authenticated,
    );
  }

  public toPersistence(domain: EmailAuthentication): EmailAuthenticationEntity {
    const persistence = new EmailAuthenticationEntity();
    persistence.id = domain.id.value;
    persistence.email = domain.email.value;
    persistence.authenticationKey = domain.authenticationKey.value;
    persistence.authenticated = domain.authenticated;
    return persistence;
  }
}
