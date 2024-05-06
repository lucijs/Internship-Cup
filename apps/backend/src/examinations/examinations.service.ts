import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExaminationDto } from './dto/create-examination.dto';

@Injectable()
export class ExaminationsService {
  constructor(private prisma: PrismaService) {}

  create(createExaminationDto: CreateExaminationDto) {
    return this.prisma.examination.create({ data: createExaminationDto });
  }

  findAll() {
    return this.prisma.examination.findMany({
      include: {
        institution: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.examination.findUnique({ where: { examinationId: id } });
  }
}
