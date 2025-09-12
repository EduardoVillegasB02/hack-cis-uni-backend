import { BadRequestException, Injectable } from '@nestjs/common';
import { Project, Team, User } from '@prisma/client';
import { CreateHackerDto } from './dto';
import { EducationService } from '../education/education.service';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { ExpertiseService } from '../expertise/expertise.service';
import { ProjectService } from '../project/project.service';
import { TeamService } from '../team/team.service';
import { UserService } from '../user/user.service';

@Injectable()
export class HackerService {
  constructor(
    private educationService: EducationService,
    private enrollmentService: EnrollmentService,
    private expertiseService: ExpertiseService,
    private projectService: ProjectService,
    private teamService: TeamService,
    private userService: UserService,
  ) {}

  async register(dto: CreateHackerDto) {
    const { project_description, team_id, team_create, team_name, ...res } =
      dto;
    await this.educationService.findOne(res.education_id);
    await this.expertiseService.findOne(res.expertise_id);
    await this.userService.verifyUserEmail(res.email);
    if (team_id) {
      await this.teamService.findOne(team_id);
      await this.enrollmentService.verifyTeams(team_id);
    }
    if (team_name) await this.teamService.verifyTeamName(team_name);
    const user: User = await this.userService.create(res);
    if (team_create) {
      const project: Project = await this.projectService.create({
        description_initial: project_description,
      });
      const team: Team = await this.teamService.create({
        name: team_name,
        project_id: project.id,
      });
      await this.enrollmentService.create({
        team_id: team.id,
        user_id: user.id,
      });
    } else
      await this.enrollmentService.create({
        team_id: team_id,
        user_id: user.id,
      });
    return {
      message: 'Registro exitoso',
      success: true,
    };
  }
}
