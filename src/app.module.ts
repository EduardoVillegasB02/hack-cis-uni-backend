import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { EducationModule } from './modules/education/education.module';
import { ExterpiseModule } from './modules/exterpise/exterpise.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { ProjectModule } from './modules/project/project.module';
import { TeamModule } from './modules/team/team.module';

@Module({
  imports: [PrismaModule, UserModule, EducationModule, ExterpiseModule, EnrollmentModule, ProjectModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
