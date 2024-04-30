import { PartialType } from '@nestjs/swagger';
import { CreateQuizQuestionDto } from './create-quiz_question.dto';

export class UpdateQuizQuestionDto extends PartialType(CreateQuizQuestionDto) {}
