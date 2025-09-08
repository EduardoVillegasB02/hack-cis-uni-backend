import { BadRequestException, Injectable } from '@nestjs/common';
import { Project } from '@prisma/client';
import { CreateProjectDto, UpdateProjectDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProjectDto): Promise<Project> {
    return await this.prisma.project.create({ data: dto });
  }

  async findAll(): Promise<Project[]> {
    return await this.prisma.project.findMany({
      where: { deleted_at: null },
    });
  }

  async findOne(id: string): Promise<Project> {
    return await this.getProjectById(id);
  }

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    await this.getProjectById(id);
    return this.prisma.project.update({
      data: dto,
      where: { id },
    });
  }

  async delete(id: string): Promise<Project> {
    await this.getProjectById(id);
    return this.prisma.project.update({
      data: { deleted_at: new Date() },
      where: { id },
    });
  }

  private async getProjectById(id: string): Promise<Project> {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });
    if (!project) throw new BadRequestException('Project is not found');
    if (project.deleted_at)
      throw new BadRequestException('Project is deleted');
    return project;
  }
}
