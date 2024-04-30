import { ApiProperty } from '@nestjs/swagger';
import { Institution } from '@prisma/client';

export class InstitutionEntity implements Institution {
  @ApiProperty()
  institutionId: number;

  @ApiProperty()
  name: string;
}
