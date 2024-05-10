import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  dateOfBirth: Date;

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

  @ApiProperty()
  confirmationPassword: string;
}
