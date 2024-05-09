import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DailyMessagesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.dailyMessage.findMany();
  }
}
