import { Module } from '@nestjs/common';
import { QuizCategoriesService } from './quiz_categories.service';
import { QuizCategoriesController } from './quiz_categories.controller';

@Module({
  controllers: [QuizCategoriesController],
  providers: [QuizCategoriesService],
})
export class QuizCategoriesModule {}
