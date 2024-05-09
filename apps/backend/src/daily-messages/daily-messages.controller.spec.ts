import { Test, TestingModule } from '@nestjs/testing';
import { DailyMessagesController } from './daily-messages.controller';
import { DailyMessagesService } from './daily-messages.service';

describe('DailyMessagesController', () => {
  let controller: DailyMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyMessagesController],
      providers: [DailyMessagesService],
    }).compile();

    controller = module.get<DailyMessagesController>(DailyMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
