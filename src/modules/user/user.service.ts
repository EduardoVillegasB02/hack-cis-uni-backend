import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto, UpdateUserDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({ data: dto });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({
      where: { deleted_at: null },
    });
  }

  async findOne(id: string): Promise<User> {
    return await this.getUserById(id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.getUserById(id);
    return this.prisma.user.update({
      data: dto,
      where: { id },
    });
  }

  async delete(id: string): Promise<User> {
    await this.getUserById(id);
    return this.prisma.user.update({
      data: { deleted_at: new Date() },
      where: { id },
    });
  }

  private async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) throw new BadRequestException('User is not found');
    if (user.deleted_at) throw new BadRequestException('User is deleted');
    return user;
  }
}
