import { Module } from '@nestjs/common';
import { DailyMessagesService } from './daily-messages.service';
import { DailyMessagesController } from './daily-messages.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DailyMessagesController],
  providers: [DailyMessagesService, PrismaModule],
})
export class DailyMessagesModule {}
