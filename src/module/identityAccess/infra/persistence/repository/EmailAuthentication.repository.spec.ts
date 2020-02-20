import * as dotenvSafe from 'dotenv-safe';
dotenvSafe.config();

import { Test, TestingModule } from '@nestjs/testing';
import { MikroORM } from 'mikro-orm';

import { MikroOrmPersistenceModule } from '@shared/infra/persistence/MikroOrmPersistence';
import { EmailAuthenticationRepository } from '@identityAccess/infra/persistence/repository/EmailAuthentication.repository';
import { EmailAuthenticationId } from '@identityAccess/domain/emailAuthentication/EmailAuthenticationId';
import { EmailAuthenticationMapper } from '@identityAccess/infra/persistence/mapper/EmailAuthentication.mapper';
import { EmailAuthentication as EmailAuthenticationEntity } from '@identityAccess/infra/persistence/entity/EmailAuthentication.entity';
import { EmailAuthentication } from '@identityAccess/domain/emailAuthentication/EmailAuthentication';

describe('EmailAuthenticationRepository', () => {
  let moduleRef: TestingModule;
  let orm: MikroORM;
  let repository: EmailAuthenticationRepository;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [MikroOrmPersistenceModule],
      providers: [EmailAuthenticationMapper, EmailAuthenticationRepository],
    }).compile();
    orm = moduleRef.get<MikroORM>(MikroORM);
    repository = moduleRef.get<EmailAuthenticationRepository>(EmailAuthenticationRepository);
  });

  afterAll(async () => {
    orm = moduleRef.get<MikroORM>(MikroORM);
    await orm.close();
  });

  describe('.nextId()', () => {
    it('should return new EmailAuthenticationId', () => {
      const result = repository.nextId();
      expect(result).toBeInstanceOf(EmailAuthenticationId);
    });
  });

  describe('.findEmailAuthenticationById()', () => {
    beforeEach(async () => {
      const persistence = new EmailAuthenticationEntity();
      persistence.id = '123';
      persistence.email = 'test@domain.com';
      persistence.authenticationKey = 'key';
      persistence.authenticated = false;
      persistence.createdAt = new Date();

      await orm.em.getRepository(EmailAuthenticationEntity).persistAndFlush(persistence);
    });

    it('should return EmailAuthentication by id', async () => {
      const result = await repository.findEmailAuthenticationById(new EmailAuthenticationId('id'));
      console.log(result);
      expect(result).toBeInstanceOf(EmailAuthentication);
    });
  });

  // describe('.save()', () => {
  //   let emailAuthentication: EmailAuthentication;

  //   beforeEach(() => {
  //     emailAuthentication = EmailAuthenticationFactory.create(
  //       new EmailAuthenticationId('id'),
  //       new Email('test@domain.com'),
  //     );
  //   });

  //   it('should save email authentication', async () => {
  //     await repository.save(emailAuthentication);
  //   });
  // });
});
