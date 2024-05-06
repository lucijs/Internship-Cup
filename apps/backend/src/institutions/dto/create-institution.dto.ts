import { ApiProperty } from '@nestjs/swagger';

export class CreateInstitutionDto {
  @ApiProperty()
  institutionId: number;

  @ApiProperty()
  name: string;
}
