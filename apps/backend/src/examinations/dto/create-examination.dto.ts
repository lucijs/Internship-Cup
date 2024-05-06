import { ApiProperty } from '@nestjs/swagger';

export class CreateExaminationDto {
  @ApiProperty()
  examinationId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  institutionId: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  discount: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  image: string | null;
}
