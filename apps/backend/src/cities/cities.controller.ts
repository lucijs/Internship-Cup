import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CityEntity } from './entities/city.entity';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

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
