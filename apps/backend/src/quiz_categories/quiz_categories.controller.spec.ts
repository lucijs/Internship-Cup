import { Test, TestingModule } from '@nestjs/testing';
import { QuizCategoriesController } from './quiz_categories.controller';
import { QuizCategoriesService } from './quiz_categories.service';

describe('QuizCategoriesController', () => {
  let controller: QuizCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizCategoriesController],
      providers: [QuizCategoriesService],
    }).compile();

    controller = module.get<QuizCategoriesController>(QuizCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
