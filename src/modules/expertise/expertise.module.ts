import { Module } from '@nestjs/common';
import { ExpertiseService } from './expertise.service';
import { ExpertiseController } from './expertise.controller';

@Module({
  controllers: [ExpertiseController],
  providers: [ExpertiseService],
  exports: [ExpertiseService],
})
export class ExpertiseModule {}
