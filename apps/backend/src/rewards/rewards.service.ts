import { Injectable } from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RewardsService {
  constructor(private prisma: PrismaService) {}
  create(createRewardDto: CreateRewardDto) {
    // return this.prisma.reward.create({data: createRewardDto});
  }

  findAll() {
    return this.prisma.reward.findMany();
  }

  findOne(id: number) {
    return this.prisma.reward.findUnique({ where: { rewardId: id } });
  }

  update(id: number, updateRewardDto: UpdateRewardDto) {
    return `This action updates a #${id} reward`;
  }

  remove(id: number) {
    return `This action removes a #${id} reward`;
  }
}
