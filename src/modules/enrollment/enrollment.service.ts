import { BadRequestException, Injectable } from '@nestjs/common';
import { Enrollment } from '@prisma/client';
import { CreateEnrollmentDto, UpdateEnrollmentDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEnrollmentDto): Promise<Enrollment> {
    return await this.prisma.enrollment.create({ data: dto });
  }

  async findAll(): Promise<Enrollment[]> {
    return await this.prisma.enrollment.findMany({
      where: { deleted_at: null },
    });
  }

  async findOne(id: string): Promise<Enrollment> {
    return await this.getEnrollmentById(id);
  }

  async update(id: string, dto: UpdateEnrollmentDto): Promise<Enrollment> {
    await this.getEnrollmentById(id);
    return this.prisma.enrollment.update({
      data: dto,
      where: { id },
    });
  }

  async delete(id: string): Promise<Enrollment> {
    await this.getEnrollmentById(id);
    return this.prisma.enrollment.update({
      data: { deleted_at: new Date() },
      where: { id },
    });
  }

  private async getEnrollmentById(id: string): Promise<Enrollment> {
    const enrollment = await this.prisma.enrollment.findUnique({
      where: { id },
    });
    if (!enrollment) throw new BadRequestException('Enrollment is not found');
    if (enrollment.deleted_at)
      throw new BadRequestException('Enrollment is deleted');
    return enrollment;
  }
}
