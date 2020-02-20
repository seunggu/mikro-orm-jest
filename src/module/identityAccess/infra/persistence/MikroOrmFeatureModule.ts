import { MikroOrmModule } from 'nestjs-mikro-orm';

import { EmailAuthentication } from '@identityAccess/infra/persistence/entity/EmailAuthentication.entity';

export const MikroOrmFeatureModule = MikroOrmModule.forFeature({ entities: [EmailAuthentication] });
