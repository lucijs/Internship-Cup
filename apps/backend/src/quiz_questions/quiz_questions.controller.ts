import { Controller, Get, Param } from '@nestjs/common';
import { QuizQuestionsService } from './quiz_questions.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { QuizQuestionEntity } from './entities/quiz_question.entity';

@ApiTags('Quiz questions')
@Controller('quizQuestions')
export class QuizQuestionsController {
  constructor(private readonly quizQuestionsService: QuizQuestionsService) {}

  @Get('/quizId/:id')
  @ApiCreatedResponse({ type: QuizQuestionEntity, isArray: true })
  findAll(@Param('id') id: string) {
    return this.quizQuestionsService.findAll(+id);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: QuizQuestionEntity })
  findOne(@Param('id') id: string) {
    return this.quizQuestionsService.findOne(+id);
  }
}
