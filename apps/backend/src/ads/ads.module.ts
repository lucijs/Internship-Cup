import { Module } from '@nestjs/common';
import { AdsService } from './ads.service';
import { AdsController } from './ads.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AdsController],
  providers: [AdsService, PrismaModule],
})
export class AdsModule {}
