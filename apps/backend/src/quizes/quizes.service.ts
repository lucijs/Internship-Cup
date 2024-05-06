import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuizesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.quiz.findMany();
  }

  async findOne(id: number) {
    return this.prisma.quiz.findUnique({ where: { quizId: id } });
  }

  async findCategories(id: number) {
    try {
      const quiz = await this.prisma.quiz.findUnique({
        where: {
          quizId: id,
        },
        include: {
          categories: {
            select: {
              category: true,
            },
          },
        },
      });

      const categories = quiz?.categories.map((c) => c.category) || [];
      return categories;
    } catch (error) {
      throw new Error('Failed to fetch categories for quiz.');
    }
  }
}
