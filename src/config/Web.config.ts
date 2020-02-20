export class WebConfig {
  static getPort(): number {
    return parseInt(process.env.WEB_PORT as string, 10);
  }
}
