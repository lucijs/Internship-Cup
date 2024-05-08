import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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
    confirmationPassword: string,
  ) {
    if (!name) throw new BadRequestException("Missing 'name' field");
    if (!surname) throw new BadRequestException("Missing 'surname' field");
    if (!dateOfBirth)
      throw new BadRequestException("Missing 'date of birth' field");
    if (!email) throw new BadRequestException("Missing 'email' field");
    if (!password) throw new BadRequestException("Missing 'password' field");
    if (!confirmationPassword)
      throw new BadRequestException("Missing 'confirmation password' field");

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) throw new BadRequestException('User already exists');

    if (password != confirmationPassword)
      throw new BadRequestException('Passwords do not match.');

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        name,
        surname,
        dateOfBirth,
        points: 0,
        streak: 0,
        email: email,
        password: hashedPassword,
        lastStreakDate: new Date(),
      },
    });

    const payload = {
      id: user.userId,
      email: user.email,
    };

    return { token: this.jwtService.sign(payload) };
  }

  async login(email: string, password: string) {
    if (!email) throw new BadRequestException("Missing 'email' field");
    if (!password) throw new BadRequestException("Missing 'password' field");

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new BadRequestException('User does not exist!');

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) throw new ForbiddenException('Password not valid');

    const payload = {
      id: user.userId,
      email: user.email,
    };

    return {
      token: this.jwtService.sign(payload),
      userId: user.userId,
      name: user.name,
      surname: user.surname,
      streaks: user.userId,
      points: user.points,
      lastStreak: user.lastStreakDate,
    };
  }

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
