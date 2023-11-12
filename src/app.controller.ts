import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
//import { Item } from './item.entity';

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

  @Get('health')
  @ApiOperation({
    summary: 'Health check with get version',
    description: 'Get git tag as the version',
  })
  public async getVesion(): Promise<string> {
    return await this.appService.getVersion();
  }
}
