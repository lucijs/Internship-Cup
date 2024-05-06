import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstitutionsService {
  constructor(private prisma: PrismaService) {}

  create(createInstitutionDto: CreateInstitutionDto) {
    return this.prisma.institution.create({ data: createInstitutionDto });
  }

  findAll() {
    return this.prisma.institution.findMany();
  }

  findOne(id: number) {
    return this.prisma.institution.findUnique({ where: { institutionId: id } });
  }

  async findInstitutionCity(id: number) {
    try {
      const institution = await this.prisma.institution.findUnique({
        where: {
          institutionId: id,
        },
        include: {
          citiesInstitutionIsIn: {
            select: {
              city: true,
            },
          },
        },
      });

      const cities = institution?.citiesInstitutionIsIn.map(
        (c) => c.city || [],
      );
      console.log(cities);
      return cities;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch cities for institution');
    }
  }
}
