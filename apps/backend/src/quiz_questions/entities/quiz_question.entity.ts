import { ApiProperty } from '@nestjs/swagger';
import { QuizQuestions } from '@prisma/client';

export class QuizQuestionEntity implements QuizQuestions {
  @ApiProperty()
  questionId: number;

  @ApiProperty()
  question: string;

  @ApiProperty()
  answer: string;
}
