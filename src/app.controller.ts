import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Item } from './item.entity';

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

  @ApiTags('Item')
  @Post('api/v1/item')
  @ApiBody({ type: Item })
  @ApiOperation({
    summary: 'Create item',
    description: 'Create item',
  })
  public async createItem(@Body() item: Item): Promise<Item> {
    console.log(item);
    return await this.appService.createItem(item);
  }

  @ApiTags('Item')
  @Get('api/v1/item')
  @ApiOperation({
    summary: 'Get all items',
    description: 'Get all items',
  })
  public async getAllItems(): Promise<Item[]> {
    return await this.appService.getAllItems();
  }

  @ApiTags('Item')
  @Get('api/v1/item/:name')
  @ApiOperation({
    summary: 'Get all items',
    description: 'Get all items',
  })
  @ApiParam({
    name: 'name',
    enum: ['apple', 'banana', 'pear', 'kiwi', 'orange', 'grape', 'pineapple'],
    description: 'Item name',
  })
  public async getItemByName(@Param() params): Promise<Item> {
    const name = params.name;
    return await this.appService.getItemByName(name);
  }
}
