import { ApiProperty } from '@nestjs/swagger';
import { Quiz_Category } from '@prisma/client';

export class QuizCategoryEntity implements Quiz_Category {
  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  quizId: number;
}
