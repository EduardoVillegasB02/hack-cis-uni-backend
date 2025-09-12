import { Module } from '@nestjs/common';
import { HackerService } from './hacker.service';
import { HackerController } from './hacker.controller';
import { EducationService } from '../education/education.service';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { ExpertiseService } from '../expertise/expertise.service';
import { ProjectService } from '../project/project.service';
import { TeamService } from '../team/team.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [HackerController],
  providers: [
    HackerService,
    EducationService,
    EnrollmentService,
    ExpertiseService,
    ProjectService,
    TeamService,
    UserService,
  ],
})
export class HackerModule {}
