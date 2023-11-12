import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { ItemService } from './item.service';
import { Item } from './item.entity';

@ApiTags('Item')
@Controller('api/v1/item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}
  @Post()
  @ApiBody({ type: Item })
  @ApiOperation({
    summary: 'Create item',
    description: 'Create item',
  })
  public async createItem(@Body() item: Item): Promise<Item> {
    console.log(item);
    return await this.itemService.createItem(item);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all items',
    description: 'Get all items',
  })
  public async getAllItems(): Promise<Item[]> {
    return await this.itemService.getAllItems();
  }

  @Get(':name')
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

  @Delete(':name')
  @ApiOperation({
    summary: 'Delete item',
    description: 'Delete item',
  })
  @ApiParam({
    name: 'name',
    enum: ['apple', 'banana', 'pear', 'kiwi', 'orange', 'grape', 'pineapple'],
    description: 'Item name',
  })
  public async deleteItemByName(@Param() params): Promise<Item> {
    const name = params.name;
    return await this.itemService.deleteItemByName(name);
  }
}
