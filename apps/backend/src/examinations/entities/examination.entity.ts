import { ApiProperty } from '@nestjs/swagger';
import { Examination } from '@prisma/client';

export class ExaminationEntity implements Examination {
  @ApiProperty()
  examinationId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  institutionId: number;

  @ApiProperty()
  time: Date;

  @ApiProperty()
  price: number;

  @ApiProperty()
  discount: number;

  @ApiProperty()
  description: string | null;

  @ApiProperty()
  image: string;
}
