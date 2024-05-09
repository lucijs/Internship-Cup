import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RewardsService } from './rewards.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RewardEntity } from './entities/reward.entity';

@ApiTags('Rewards')
@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @Post()
  @ApiCreatedResponse({ type: RewardEntity })
  create(@Body() createRewardDto: CreateRewardDto) {
    return this.rewardsService.create(createRewardDto);
  }

  @Get()
  @ApiCreatedResponse({ type: RewardEntity, isArray: true })
  findAll() {
    return this.rewardsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: RewardEntity })
  findOne(@Param('id') id: string) {
    return this.rewardsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: RewardEntity })
  update(@Param('id') id: string, @Body() updateRewardDto: UpdateRewardDto) {
    return this.rewardsService.update(+id, updateRewardDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: RewardEntity })
  remove(@Param('id') id: string) {
    return this.rewardsService.remove(+id);
  }
}
