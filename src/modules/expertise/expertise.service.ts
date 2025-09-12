import { BadRequestException, Injectable } from '@nestjs/common';
import { Expertise } from '@prisma/client';
import { CreateExpertiseDto, UpdateExpertiseDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';
import { SearchDto } from '../../common/dto';

@Injectable()
export class ExpertiseService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateExpertiseDto): Promise<any> {
    await this.prisma.expertise.create({ data: dto });
    return {
      message: 'Creación exitosa',
      success: true,
    }
  }

  async findAll(dto: SearchDto): Promise<any> {
    const { search } = dto;
    const where: any = { deleted_at: null };
    if (search)
      where.name = {
        contains: search,
        mode: 'insensitive',
      };
    const expertises = await this.prisma.expertise.findMany({
      select: {
        id: true,
        name: true,
      },
      where,
    });
    return {
      message: 'Lista de habilidades',
      success: true,
      data: expertises,
    };
  }

  async findOne(id: string): Promise<Expertise> {
    return await this.getExpertiseById(id);
  }

  async update(id: string, dto: UpdateExpertiseDto): Promise<Expertise> {
    await this.getExpertiseById(id);
    return this.prisma.expertise.update({
      data: dto,
      where: { id },
    });
  }

  async delete(id: string): Promise<Expertise> {
    await this.getExpertiseById(id);
    return this.prisma.expertise.update({
      data: { deleted_at: new Date() },
      where: { id },
    });
  }

  private async getExpertiseById(id: string): Promise<Expertise> {
    const expertise = await this.prisma.expertise.findUnique({
      where: { id },
    });
    if (!expertise) throw new BadRequestException('Expertise is not found');
    if (expertise.deleted_at)
      throw new BadRequestException('Expertise is deleted');
    return expertise;
  }
}
