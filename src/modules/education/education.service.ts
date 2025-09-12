import { BadRequestException, Injectable } from '@nestjs/common';
import { Education } from '@prisma/client';
import { CreateEducationDto, UpdateEducationDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';
import { SearchDto } from '../../common/dto';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEducationDto): Promise<Education> {
    await this.verifyEducationName(dto.name);
    return await this.prisma.education.create({ data: dto });
  }

  async findAll(dto: SearchDto): Promise<any> {
    const { search } = dto;
    const where: any = { deleted_at: null };
    if (search)
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { initial: { contains: search, mode: 'insensitive' } },
      ];
    const educations = await this.prisma.education.findMany({
      select: {
        id: true,
        name: true,
        initial: true,
      },
      where,
    });
    return {
      message: 'Lista de universidades o institutos',
      success: true,
      data: educations,
    };
  }

  async findOne(id: string): Promise<Education> {
    return await this.getEducationById(id);
  }

  async update(id: string, dto: UpdateEducationDto): Promise<Education> {
    await this.getEducationById(id);
    return this.prisma.education.update({
      data: dto,
      where: { id },
    });
  }

  async delete(id: string): Promise<Education> {
    await this.getEducationById(id);
    return this.prisma.education.update({
      data: { deleted_at: new Date() },
      where: { id },
    });
  }

  private async getEducationById(id: string): Promise<Education> {
    const education = await this.prisma.education.findUnique({
      where: { id },
    });
    if (!education)
      throw new BadRequestException(
        'La universidad o instituto no se encuentra',
      );
    if (education.deleted_at)
      throw new BadRequestException(
        'Esta universidad o instituto ha sido eliminado',
      );
    return education;
  }

  private async verifyEducationName(name: string): Promise<void> {
    const education = await this.prisma.education.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
      },
    });
    if (education)
      throw new BadRequestException(
        'La universidad o instituto ya ha sido creado',
      );
  }
}
