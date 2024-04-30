import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdsService {
  constructor(private prisma: PrismaService) {}
  findAll() {
    return this.prisma.ad.findMany();
  }

  findOne(id: number) {
    return this.prisma.ad.findUnique({ where: { adId: id } });
  }
}
