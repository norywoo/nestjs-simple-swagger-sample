import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { exec } from "child_process";
import { promisify } from 'util';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Hello World!';
  }

  public async getVersion(): Promise<string> {
    const cmd = 'git describe --tags --abbrev=0';
    const shellExec = promisify(exec);
    const { stdout, stderr }= await shellExec(cmd);
    if (stderr) {
      throw new HttpException(stderr, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return stdout.trim();
  }
}
