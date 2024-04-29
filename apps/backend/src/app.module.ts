import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { PrismaModule } from './prisma/prisma.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { AdsModule } from './ads/ads.module';
import { CategoriesModule } from './categories/categories.module';
import { QuizesModule } from './quizes/quizes.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    }),
    CitiesModule,
    PrismaModule,
    InstitutionsModule,
    AdsModule,
    CategoriesModule,
    QuizesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
