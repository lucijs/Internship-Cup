import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuizQuestionsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.quizQuestions.findMany();
  }

  findOne(id: number) {
    return this.prisma.quizQuestions.findUnique({ where: { questionId: id } });
  }
}
