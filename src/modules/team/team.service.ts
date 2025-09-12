import { BadRequestException, Injectable } from '@nestjs/common';
import { Team } from '@prisma/client';
import { CreateTeamDto, UpdateTeamDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';
import { SearchDto } from '../../common/dto';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTeamDto): Promise<Team> {
    return await this.prisma.team.create({ data: dto });
  }

  async findAll(dto: SearchDto): Promise<any> {
    const { search } = dto;
    const where: any = { deleted_at: null };
    if (search)
      where.name = {
        contains: search,
        mode: 'insensitive',
      };
    const teams = await this.prisma.team.findMany({
      select: {
        id: true,
        name: true,
      },
      where,
    });
    return {
      message: 'Lista de equipos',
      success: true,
      data: teams,
    };
  }

  async findOne(id: string): Promise<Team> {
    return await this.getTeamById(id);
  }

  async update(id: string, dto: UpdateTeamDto): Promise<Team> {
    await this.getTeamById(id);
    return this.prisma.team.update({
      data: dto,
      where: { id },
    });
  }

  async delete(id: string): Promise<Team> {
    await this.getTeamById(id);
    return this.prisma.team.update({
      data: { deleted_at: new Date() },
      where: { id },
    });
  }

  private async getTeamById(id: string): Promise<Team> {
    const team = await this.prisma.team.findUnique({
      where: { id },
    });
    if (!team) throw new BadRequestException('El equipo no existe');
    if (team.deleted_at)
      throw new BadRequestException('Este equipo ha sido eliminado');
    return team;
  }

  async verifyTeamName(name: string): Promise<void> {
    const team = await this.prisma.team.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
      },
    });
    if (team)
      throw new BadRequestException('Ya existe un equipo con este nombre');
  }
}
