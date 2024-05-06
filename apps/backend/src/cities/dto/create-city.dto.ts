import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @ApiProperty()
  cityId: number;

  @ApiProperty()
  name: string;
}
