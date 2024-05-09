import { ApiProperty } from '@nestjs/swagger';
import { Reward } from '@prisma/client';

export class RewardEntity implements Reward {
  @ApiProperty()
  rewardId: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  img: string | null;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  points: number;
}
