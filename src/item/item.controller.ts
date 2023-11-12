import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { ItemService } from './item.service';
import { Item } from './item.entity';

@Controller()
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @ApiTags('Item')
  @Post('api/v1/item')
  @ApiBody({ type: Item })
  @ApiOperation({
    summary: 'Create item',
    description: 'Create item',
  })
  public async createItem(@Body() item: Item): Promise<Item> {
    console.log(item);
    return await this.itemService.createItem(item);
  }

  @ApiTags('Item')
  @Get('api/v1/item')
  @ApiOperation({
    summary: 'Get all items',
    description: 'Get all items',
  })
  public async getAllItems(): Promise<Item[]> {
    return await this.itemService.getAllItems();
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
    return await this.itemService.getItemByName(name);
  }
}
