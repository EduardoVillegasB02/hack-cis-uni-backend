import { BadRequestException, Injectable } from '@nestjs/common';
import { Education } from '@prisma/client';
import { CreateEducationDto, UpdateEducationDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEducationDto): Promise<Education> {
    return await this.prisma.education.create({ data: dto });
  }

  async findAll(): Promise<Education[]> {
    return await this.prisma.education.findMany({
      where: { deleted_at: null },
    });
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
    if (!education) throw new BadRequestException('Education is not found');
    if (education.deleted_at)
      throw new BadRequestException('Education is deleted');
    return education;
  }
}
