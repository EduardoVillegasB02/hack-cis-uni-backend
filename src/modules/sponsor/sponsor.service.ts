import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SponsorService {
  constructor(private prisma: PrismaService) {}

  async register(dto: CreateSponsorDto) {
    await this.verifyUserName(dto.name);
    await this.prisma.sponsor.create({
      data: dto,
    });
    return {
      message: 'Registro exitoso',
      succes: true,
    };
  }

  private async verifyUserName(name: string): Promise<void> {
    const user = await this.prisma.sponsor.findFirst({
      where: { name },
    });
    if (user)
      throw new BadRequestException(
        'El registro ya fue realizado, solo se permite un intento',
      );
  }
}
