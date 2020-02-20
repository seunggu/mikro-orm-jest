import { Identity } from '@shared/domain/Identity';

export abstract class Entity<TIdentity extends Identity> {
  protected readonly _id: TIdentity;

  protected constructor(id: TIdentity) {
    this._id = id;
  }

  get id(): TIdentity {
    return this._id;
  }

  public identical(other: Entity<TIdentity>): boolean {
    return this.id.equals(other.id);
  }
}
