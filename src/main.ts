import * as dotenvSafe from 'dotenv-safe';

import { Nest } from '@shared/infra/di/Nest';
import { Web } from '@shared/infra/web/Web';

dotenvSafe.config();

async function bootstrap(): Promise<void> {
  const nest = await Nest.create();
  await Web.listen(nest.app);
}

bootstrap();
