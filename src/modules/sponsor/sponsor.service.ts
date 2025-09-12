import { Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SponsorService {
  constructor(private prisma: PrismaService) {}

  async register(dto: CreateSponsorDto) {
    await this.prisma.sponsor.create({
      data: dto,
    });
    return {
      message: 'Registro exitoso',
      succes: true,
    };
  }
}
