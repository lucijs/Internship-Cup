import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizCategoriesService } from './quiz_categories.service';
import { CreateQuizCategoryDto } from './dto/create-quiz_category.dto';
import { UpdateQuizCategoryDto } from './dto/update-quiz_category.dto';

@Controller('quiz-categories')
export class QuizCategoriesController {
  constructor(private readonly quizCategoriesService: QuizCategoriesService) {}

  @Post()
  create(@Body() createQuizCategoryDto: CreateQuizCategoryDto) {
    return this.quizCategoriesService.create(createQuizCategoryDto);
  }

  @Get()
  findAll() {
    return this.quizCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizCategoryDto: UpdateQuizCategoryDto) {
    return this.quizCategoriesService.update(+id, updateQuizCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizCategoriesService.remove(+id);
  }
}
