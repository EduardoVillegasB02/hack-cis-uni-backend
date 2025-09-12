import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EducationModule } from './modules/education/education.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { ExpertiseModule } from './modules/expertise/expertise.module';
import { ProjectModule } from './modules/project/project.module';
import { TeamModule } from './modules/team/team.module';
import { UserModule } from './modules/user/user.module';
import { HackerModule } from './modules/hacker/hacker.module';
import { SponsorModule } from './modules/sponsor/sponsor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EducationModule,
    EnrollmentModule,
    ExpertiseModule,
    PrismaModule,
    ProjectModule,
    TeamModule,
    UserModule,
    HackerModule,
    SponsorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
