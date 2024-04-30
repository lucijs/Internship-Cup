import { ApiProperty } from '@nestjs/swagger';
import { Ad } from '@prisma/client';

export class AdEntity implements Ad {
  @ApiProperty()
  adId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string | null;

  @ApiProperty()
  price: number;

  @ApiProperty()
  discount: number;

  @ApiProperty()
  image: string;
}
