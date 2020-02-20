import { MikroOrmModule } from 'nestjs-mikro-orm';

import { MikroOrmConfig } from '@config/MikroOrm.config';

export const MikroOrmPersistenceModule = MikroOrmModule.forRoot(MikroOrmConfig.getConfig());
