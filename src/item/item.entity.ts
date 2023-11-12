import { ApiProperty } from '@nestjs/swagger';

export class Item {
  @ApiProperty({ example: 'apple' })
  name: string;
  @ApiProperty({ example: '3' })
  qty: number;
}
