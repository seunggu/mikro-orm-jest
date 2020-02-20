import * as sgMail from '@sendgrid/mail';

import { IEmailService } from '@shared/service/EmailService.interface';
import { SendGridConfig } from '@config/Sendgrid.config';

export class SendGridEmailService implements IEmailService {
  constructor() {
    const apiKey = SendGridConfig.getApiKey();
    sgMail.setApiKey(apiKey);
  }

  async sendEmail(sender: string, receiver: string, subject: string, content: string): Promise<void> {
    const msg = {
      to: receiver,
      from: sender,
      subject: subject,
      text: content,
    };
    await sgMail.send(msg);
  }
}
