import { Module } from '@nestjs/common';
import { ExterpiseService } from './exterpise.service';
import { ExterpiseController } from './exterpise.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ExterpiseController],
  providers: [ExterpiseService, PrismaService],
})
export class ExterpiseModule {}
