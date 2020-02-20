import { IUseCase } from '@shared/core/UseCase.interface';
import { ISendAuthenticationEmailRequest } from '@identityAccess/useCase/emailAuthentication/sendAuthenticationEmail/SendAuthenticationEmail.request';

export type ISendAuthenticationEmailUseCase = IUseCase<ISendAuthenticationEmailRequest, void>;

export const ISendAuthenticationEmailUseCaseSymbol = 'ISendAuthenticationEmailUseCase';
