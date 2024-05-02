import { Injectable } from '@nestjs/common';
import { CreateQuizCategoryDto } from './dto/create-quiz_category.dto';
import { UpdateQuizCategoryDto } from './dto/update-quiz_category.dto';

@Injectable()
export class QuizCategoriesService {
  create(createQuizCategoryDto: CreateQuizCategoryDto) {
    return 'This action adds a new quizCategory';
  }

  findAll() {
    return `This action returns all quizCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quizCategory`;
  }

  update(id: number, updateQuizCategoryDto: UpdateQuizCategoryDto) {
    return `This action updates a #${id} quizCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} quizCategory`;
  }
}
