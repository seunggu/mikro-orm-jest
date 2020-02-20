import { v1 as uuid } from 'uuid';

import { DomainEventId } from '@shared/domain/event/DomainEventId';

export abstract class DomainEvent {
  public readonly id: DomainEventId;
  public readonly timestamp: Date;

  constructor() {
    this.id = new DomainEventId(uuid());
    this.timestamp = new Date();
  }

  get eventName(): string {
    return this.constructor.name;
  }
}
