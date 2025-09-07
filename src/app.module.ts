import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EducationModule } from './modules/education/education.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { ExterpiseModule } from './modules/exterpise/exterpise.module';
import { ProjectModule } from './modules/project/project.module';
import { TeamModule } from './modules/team/team.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EducationModule,
    EnrollmentModule,
    ExterpiseModule,
    PrismaModule,
    ProjectModule,
    TeamModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
