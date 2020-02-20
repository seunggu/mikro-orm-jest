import { IsEmail, MaxLength } from 'class-validator';

export class SendAuthenticationEmailDTO {
  @IsEmail()
  @MaxLength(30)
  email: string;
}
