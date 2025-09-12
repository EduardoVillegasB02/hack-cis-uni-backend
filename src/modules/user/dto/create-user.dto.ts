import { Level } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsOptional()
  dni?: string | null;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEnum(Level)
  @IsNotEmpty()
  level: Level;

  @IsString()
  @IsNotEmpty()
  linkedin: string;

  @IsString()
  @IsOptional()
  github?: string | null;

  @IsString()
  @IsOptional()
  social?: string | null;

  @IsString()
  @IsOptional()
  background?: string | null;

  @IsUUID()
  @IsNotEmpty()
  education_id: string;

  @IsUUID()
  @IsNotEmpty()
  expertise_id: string;
}
