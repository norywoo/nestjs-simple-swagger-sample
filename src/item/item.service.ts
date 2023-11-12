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
    return this.items.find((item) => item.name === name);
    //return this.appRepository.findOne({ name });
  }

  public async updateItemByName(name: string, item: Item): Promise<Item> {
    const index = this.items.findIndex((item) => item.name === name);
    this.items[index] = item;
    return item;
    //return this.appRepository.update({ name }, item);
  }

  public async deleteItemByName(name: string): Promise<Item> {
    const item = this.items.find((item) => item.name === name);
    this.items = this.items.filter((item) => item.name !== name);
    return item;
    //return this.appRepository.delete({ name });
  }
}
