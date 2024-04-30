import { Controller, Get, Param } from '@nestjs/common';
import { ExaminationsService } from './examinations.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ExaminationEntity } from './entities/examination.entity';

@ApiTags('Examinations')
@Controller('examinations')
export class ExaminationsController {
  constructor(private readonly examinationsService: ExaminationsService) {}

  @Get()
  @ApiCreatedResponse({ type: ExaminationEntity, isArray: true })
  findAll() {
    return this.examinationsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ExaminationEntity })
  findOne(@Param('id') id: string) {
    return this.examinationsService.findOne(+id);
  }
}
