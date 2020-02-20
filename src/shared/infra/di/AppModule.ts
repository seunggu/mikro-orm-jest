import { Module } from '@nestjs/common';

import { IdentityAccessModule } from '@identityAccess/infra/di/IdentityAccessModule';
import { GlobalModule } from '@shared/infra/di/GlobalModule';

@Module({
  imports: [GlobalModule, IdentityAccessModule],
})
export class AppModule {}
