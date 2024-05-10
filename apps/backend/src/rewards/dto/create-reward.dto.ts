import { ApiProperty } from '@nestjs/swagger';

export class CreateRewardDto {
  @ApiProperty()
  rewardId: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  img: string;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  points: number;
}
