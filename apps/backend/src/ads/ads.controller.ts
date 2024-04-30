import { Controller, Get, Param } from '@nestjs/common';
import { AdsService } from './ads.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AdEntity } from './entities/ad.entity';

@ApiTags('Ads')
@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Get()
  @ApiCreatedResponse({ type: AdEntity, isArray: true })
  findAll() {
    return this.adsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: AdEntity })
  findOne(@Param('id') id: string) {
    return this.adsService.findOne(+id);
  }
}
