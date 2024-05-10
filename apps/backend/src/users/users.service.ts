import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserAuthGuard } from './user-auth.guard';

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
    if (!name) throw new BadRequestException("Nedostaje polje 'ime'");
    if (!surname) throw new BadRequestException("Nedostaje polje 'prezime'");
    if (!dateOfBirth)
      throw new BadRequestException("Nedostaje polje 'datum rođenja'");
    if (!email) throw new BadRequestException("Nedostaje polje 'email'");
    if (!email.includes('@') || !email.includes('.'))
      throw new BadRequestException('Nevaljan email');
    if (!password) throw new BadRequestException("Nedostaje polje 'lozinka'");
    if (password.length < 8)
      throw new BadRequestException('Lozinka je prekratka');
    if (!confirmationPassword)
      throw new BadRequestException("Nedostaje polje 'potvrda lozinke'");
    if (password != confirmationPassword)
      throw new BadRequestException('Lozinke se ne podudaraju');

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) throw new BadRequestException('Korisnik već postoji');

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
        lastStreakDate: null,
      },
    });

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
      lastStreakDate: user.lastStreakDate,
    };
  }

  async login(email: string, password: string) {
    if (!email) throw new BadRequestException("Nedostaje polje 'email'");
    if (!password) throw new BadRequestException("Nedostaje polje 'lozinka'");

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new BadRequestException('Korisnik ne postoji');

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) throw new ForbiddenException('Pogrešna lozinka');

    const payload = {
      id: user.userId,
      email: user.email,
    };

    return {
      token: this.jwtService.sign(payload),
      userId: user.userId,
      name: user.name,
      surname: user.surname,
      streaks: user.streak,
      points: user.points,
      lastStreakDate: user.lastStreakDate,
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
