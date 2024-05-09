import { Test, TestingModule } from '@nestjs/testing';
import { DailyMessagesService } from './daily-messages.service';

describe('DailyMessagesService', () => {
  let service: DailyMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyMessagesService],
    }).compile();

    service = module.get<DailyMessagesService>(DailyMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
