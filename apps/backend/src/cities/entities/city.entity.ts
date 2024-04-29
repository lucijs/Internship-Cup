import { ApiProperty } from '@nestjs/swagger';
import { City } from '@prisma/client';

export class CityEntity implements City {
  @ApiProperty()
  cityId: number;

  @ApiProperty()
  name: string;
}
