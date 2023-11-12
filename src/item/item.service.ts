import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  items: Item[];
  public constructor() {
    this.items = [];
  }

  public async createItem(item: Item): Promise<Item> {
    console.log(item);
    this.items.push(item);
    //this.appRepository.create(item);
    return item;
  }

  public async getAllItems(): Promise<Item[]> {
    return this.items;
    //return this.appRepository.find();
  }

  public async getItemByName(name: string): Promise<Item> {
    console.log(`NAM: ${name}`);
    console.log(this.items);
    const foundItem = this.items.find((item) => item.name === name);
    console.log(foundItem);
    return foundItem;
    //return this.appRepository.findOne({ name });
  }
}
