import { Module } from '@nestjs/common';
import { QuizQuestionsService } from './quiz_questions.service';
import { QuizQuestionsController } from './quiz_questions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [QuizQuestionsController],
  providers: [QuizQuestionsService, PrismaModule],
})
export class QuizQuestionsModule {}
