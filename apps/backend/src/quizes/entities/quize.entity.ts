import { ApiProperty } from '@nestjs/swagger';
import { Quiz } from '@prisma/client';

export class QuizEntity implements Quiz {
  @ApiProperty()
  quizId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  text: string;
}
