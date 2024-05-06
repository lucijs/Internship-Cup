import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CitiesService } from './cities.service';

import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CityEntity } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @ApiCreatedResponse({ type: CityEntity })
  create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  @ApiCreatedResponse({ type: CityEntity, isArray: true })
  findAll() {
    return this.citiesService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CityEntity })
  findOne(@Param('id') id: string) {
    return this.citiesService.findOne(+id);
  }
}
