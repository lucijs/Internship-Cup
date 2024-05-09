import { Controller, Get } from '@nestjs/common';
import { DailyMessagesService } from './daily-messages.service';

@Controller('daily-messages')
export class DailyMessagesController {
  constructor(private readonly dailyMessagesService: DailyMessagesService) {}

  @Get()
  findAll() {
    return this.dailyMessagesService.findAll();
  }
}
