export interface IEmailService {
  sendEmail(sender: string, receiver: string, subject: string, content: string): Promise<void>;
}

export const IEmailServiceSymbol = Symbol('IEmailService');
