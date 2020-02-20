import { AggregateRoot } from '@shared/domain/Aggregate';
import { Identity } from '@shared/domain/Identity';

export interface IMapper<TAggregate extends AggregateRoot<Identity>, TPersistenceEntity> {
  toDomain(persistence: TPersistenceEntity): TAggregate;
  toPersistence(aggregate: TAggregate): TPersistenceEntity;
}
