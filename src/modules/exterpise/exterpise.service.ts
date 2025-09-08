import { BadRequestException, Injectable } from '@nestjs/common';
import { Exterpise } from '@prisma/client';
import { CreateExterpiseDto, UpdateExterpiseDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExterpiseService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateExterpiseDto): Promise<Exterpise> {
    return await this.prisma.exterpise.create({ data: dto });
  }

  async findAll(): Promise<Exterpise[]> {
    return await this.prisma.exterpise.findMany({
      where: { deleted_at: null },
    });
  }

  async findOne(id: string): Promise<Exterpise> {
    return await this.getExterpiseById(id);
  }

  async update(id: string, dto: UpdateExterpiseDto): Promise<Exterpise> {
    await this.getExterpiseById(id);
    return this.prisma.exterpise.update({
      data: dto,
      where: { id },
    });
  }

  async delete(id: string): Promise<Exterpise> {
    await this.getExterpiseById(id);
    return this.prisma.exterpise.update({
      data: { deleted_at: new Date() },
      where: { id },
    });
  }

  private async getExterpiseById(id: string): Promise<Exterpise> {
    const exterpise = await this.prisma.exterpise.findUnique({
      where: { id },
    });
    if (!exterpise) throw new BadRequestException('Exterpise is not found');
    if (exterpise.deleted_at)
      throw new BadRequestException('Exterpise is deleted');
    return exterpise;
  }
}
