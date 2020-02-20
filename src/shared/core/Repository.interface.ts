import { AggregateRoot } from '@shared/domain/Aggregate';
import { Identity } from '@shared/domain/Identity';

export interface IRepository<TAggregate extends AggregateRoot<Identity>> {
  save(aggregate: TAggregate): Promise<void>;
  remove(aggregate: TAggregate): Promise<void>;
}
