import { Module } from '@nestjs/common';
import { QuizesService } from './quizes.service';
import { QuizesController } from './quizes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [QuizesController],
  providers: [QuizesService, PrismaModule],
})
export class QuizesModule {}
