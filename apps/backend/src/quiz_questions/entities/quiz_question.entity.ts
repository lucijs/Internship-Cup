import { ApiProperty } from '@nestjs/swagger';
import { QuizQuestion } from '@prisma/client';

export class QuizQuestionEntity implements QuizQuestion {
  @ApiProperty()
  questionId: number;

  @ApiProperty()
  question: string;

  @ApiProperty()
  possibleAnswers: string[];

  @ApiProperty()
  correctAnswer1: string[];

  @ApiProperty()
  correctAnswer2: string[];

  @ApiProperty()
  type: string;

  @ApiProperty()
  quizId: number;
}
