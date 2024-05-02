import { Controller, Get, Param } from '@nestjs/common';
import { QuizesService } from './quizes.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { QuizEntity } from './entities/quize.entity';

@ApiTags('Quizes')
@Controller('quizes')
export class QuizesController {
  constructor(private readonly quizesService: QuizesService) {}

  @Get()
  @ApiCreatedResponse({ type: QuizEntity, isArray: true })
  findAll() {
    return this.quizesService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: QuizEntity })
  findOne(@Param('id') id: string) {
    return this.quizesService.findOne(+id);
  }

  @Get('/categories/:id')
  @ApiCreatedResponse({ type: String, isArray: true })
  findCategories(@Param('id') id: string) {
    return this.quizesService.findCategories(+id);
  }
}
