import { PartialType } from '@nestjs/swagger';
import { CreateQuizCategoryDto } from './create-quiz_category.dto';

export class UpdateQuizCategoryDto extends PartialType(CreateQuizCategoryDto) {}
