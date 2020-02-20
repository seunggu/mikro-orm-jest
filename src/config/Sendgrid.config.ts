export class SendGridConfig {
  static getApiKey(): string {
    return process.env.SENDGRID_API_KEY as string;
  }
}
