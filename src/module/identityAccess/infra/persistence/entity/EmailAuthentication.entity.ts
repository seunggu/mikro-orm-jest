import { PrimaryKey, Entity, Property, AnyEntity } from 'mikro-orm';

@Entity()
export class EmailAuthentication implements AnyEntity<EmailAuthentication, 'id'> {
  @PrimaryKey()
  id: string;

  @Property()
  email: string;

  @Property()
  authenticationKey: string;

  @Property()
  authenticated: boolean;

  @Property()
  createdAt: Date = new Date();
}
