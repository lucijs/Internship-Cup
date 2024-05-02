import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async register(
    name: string,
    surname: string,
    dateOfBirth: Date,
    email: string,
    password: string,
  ) {
    if (!name) throw new BadRequestException("Missing 'name' field");
    if (!surname) throw new BadRequestException("Missing 'surname' field");
    // if (!dateOfBirth)
    // throw new BadRequestException("Missing 'date of birth' field");
    if (!email) throw new BadRequestException("Missing 'email' field");
    if (!password) throw new BadRequestException("Missing 'password' field");

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) throw new BadRequestException('User already exists');

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        name,
        surname,
        dateOfBirth: new Date('2003-06-26'),
        points: 0,
        streak: 0,
        email: email,
        password: hashedPassword,
        lastStreakDate: new Date('2024-01-01'), //privremeno
      },
    });

    const payload = {
      id: user.userId,
      email: user.email,
    };

    return { token: this.jwtService.sign(payload) };
  }
  //login

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { userId: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { userId: id },
      data: updateUserDto,
    });
  }
}
