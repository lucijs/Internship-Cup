import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstitutionsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.institution.findMany();
  }

  findOne(id: number) {
    return this.prisma.institution.findUnique({ where: { institutionId: id } });
  }
}
