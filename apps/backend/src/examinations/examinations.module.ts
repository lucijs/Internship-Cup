import { Module } from '@nestjs/common';
import { ExaminationsService } from './examinations.service';
import { ExaminationsController } from './examinations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ExaminationsController],
  providers: [ExaminationsService, PrismaModule],
})
export class ExaminationsModule {}
