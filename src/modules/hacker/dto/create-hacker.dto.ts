import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateIf,
} from 'class-validator';
import { CreateUserDto } from '../../../modules/user/dto';

export class CreateHackerDto extends CreateUserDto {
  @IsBoolean()
  team_create: boolean;

  @ValidateIf(o => o.team_create === true)
  @IsString()
  @IsNotEmpty()
  project_description!: string;

  @ValidateIf(o => o.team_create === true)
  @IsString()
  @IsNotEmpty()
  team_name!: string;

  @ValidateIf(o => o.team_create !== true)
  @IsUUID()
  @IsNotEmpty()
  team_id!: string;
}
