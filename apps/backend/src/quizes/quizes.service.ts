import { Injectable } from '@nestjs/common';
import { CreateQuizeDto } from './dto/create-quize.dto';
import { UpdateQuizeDto } from './dto/update-quize.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuizesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.quiz.findMany();
  }

  findOne(id: number) {
    return this.prisma.quiz.findUnique({ where: { quizId: id } });
  }
}
