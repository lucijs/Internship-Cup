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

  // async findInstitutionCity(id: number) {
  //   try {
  //     const institution = await this.prisma.institution.findUnique({
  //       where: {
  //         institutionId: id,
  //       },
  //       include: {
  //         citiesInstitutionIsIn: {
  //           select: {
  //             city: true,
  //           },
  //         },
  //       },
  //     });

  //     const cities = institution?.citiesInstitutionIsIn.map(
  //       (c) => c.city || [],
  //     );
  //     console.log(cities);
  //     return cities;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error('Failed to fetch cities for institution');
  //   }
  // }
}
