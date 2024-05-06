import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExaminationsService } from './examinations.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ExaminationEntity } from './entities/examination.entity';
import { CreateExaminationDto } from './dto/create-examination.dto';

@ApiTags('Examinations')
@Controller('examinations')
export class ExaminationsController {
  constructor(private readonly examinationsService: ExaminationsService) {}

  @Post()
  @ApiCreatedResponse({ type: ExaminationEntity })
  create(@Body() createExaminationDto: CreateExaminationDto) {
    return this.examinationsService.create(createExaminationDto);
  }

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
