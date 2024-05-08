import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  dateRegister: Date;

  @ApiProperty()
  points: number;

  @ApiProperty()
  streak: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  lastStreakDate: Date;
}
