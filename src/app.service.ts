import { Injectable } from '@nestjs/common';
const DEFAULT_APP_VERSION = '0.0';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Hello World!';
  }

  public async getVersion(): Promise<string> {
    return process.env.APP_VERSION ?? DEFAULT_APP_VERSION;
  }
}
