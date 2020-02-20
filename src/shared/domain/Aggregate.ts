import { DomainEvent } from '@shared/domain/event/DomainEvent';
import { Entity } from '@shared/domain/Entity';
import { Identity } from '@shared/domain/Identity';

export abstract class AggregateRoot<TIdentity extends Identity> extends Entity<TIdentity> {
  private readonly _domainEvents: DomainEvent[];

  constructor(id: TIdentity) {
    super(id);
    this._domainEvents = [];
  }

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }
}
