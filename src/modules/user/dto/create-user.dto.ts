import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  linkedin: string;

  @IsString()
  @IsOptional()
  github?: string;

  @IsString()
  @IsOptional()
  social?: string;

  @IsString()
  @IsOptional()
  background?: string;

  @IsUUID()
  @IsNotEmpty()
  education_id: string;

  @IsUUID()
  @IsNotEmpty()
  exterpise_id: string;  
}
