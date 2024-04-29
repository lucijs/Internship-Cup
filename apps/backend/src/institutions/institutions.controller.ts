import { Controller, Get, Param } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { InstitutionEntity } from './entities/institution.entity';

@ApiTags('Institutions')
@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

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
}
