import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateEnrollmentDto {
  @IsUUID()
  @IsNotEmpty()
  team_id: string;

  @IsUUID()
  @IsNotEmpty()
  user_id: string;
}
