import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description_initial?: string;

  @IsString()
  @IsOptional()
  description_final?: string;

  @IsString()
  @IsOptional()
  github?: string;

  @IsString()
  @IsOptional()
  video_pitch?: string;

  @IsString()
  @IsOptional()
  presentation?: string;

  @IsString()
  @IsOptional()
  demo?: string;

  @IsString()
  @IsOptional()
  documentation?: string;

  @IsString()
  @IsOptional()
  team?: string;
}
