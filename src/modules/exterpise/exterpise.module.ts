import { Module } from '@nestjs/common';
import { ExterpiseService } from './exterpise.service';
import { ExterpiseController } from './exterpise.controller';

@Module({
  controllers: [ExterpiseController],
  providers: [ExterpiseService],
})
export class ExterpiseModule {}
