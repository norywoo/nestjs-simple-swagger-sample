import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @ApiOperation({
    summary: 'Get hello',
    description: 'Get hello from nestjs default service getHello()',
  })
  public getHello(): string {
    return this.appService.getHello();
  }

  @Get('version')
  @ApiOperation({
    summary: 'Get version',
    description: 'Get git tag as the version',
  })
  public async getVesion(): Promise<string> {
    return await this.appService.getVersion();
  }
}
