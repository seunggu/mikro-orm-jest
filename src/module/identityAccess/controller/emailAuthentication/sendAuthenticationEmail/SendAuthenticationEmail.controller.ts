import { Controller, Post, Body, Inject } from '@nestjs/common';

import {
  ISendAuthenticationEmailUseCase,
  ISendAuthenticationEmailUseCaseSymbol,
} from '@identityAccess/useCase/emailAuthentication/sendAuthenticationEmail/SendAuthenticationEmail.useCase.interface';
import { SendAuthenticationEmailDTO } from '@identityAccess/controller/emailAuthentication/sendAuthenticationEmail/SendAuthenticationEmail.dto';

@Controller()
export class SendAuthenticationEmailController {
  constructor(
    @Inject(ISendAuthenticationEmailUseCaseSymbol)
    private readonly useCase: ISendAuthenticationEmailUseCase,
  ) {}

  @Post()
  async execute(@Body() body: SendAuthenticationEmailDTO): Promise<void> {
    await this.useCase.execute(body);
  }
}
