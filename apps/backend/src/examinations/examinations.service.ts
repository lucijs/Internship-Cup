import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExaminationsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.examination.findMany();
  }

  findOne(id: number) {
    return this.prisma.examination.findUnique({ where: { examinationId: id } });
  }
}
