import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { InstitutionEntity } from './entities/institution.entity';
import { CityEntity } from 'src/cities/entities/city.entity';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { get } from 'http';

@ApiTags('Institutions')
@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  @ApiCreatedResponse({ type: CityEntity })
  create(@Body() createInstitutionDto: CreateInstitutionDto) {
    return this.institutionsService.create(createInstitutionDto);
  }

  @Get()
  @ApiCreatedResponse({ type: InstitutionEntity, isArray: true })
  findAll() {
    return this.institutionsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: InstitutionEntity })
  findOne(@Param('id') id: string) {
    return this.institutionsService.findOne(+id);
  }

  @Get('/cities/:id')
  @ApiCreatedResponse({ type: InstitutionEntity })
  findInstitutionCity(@Param('id') id: string) {
    return this.institutionsService.findInstitutionCity(+id);
  }
}
