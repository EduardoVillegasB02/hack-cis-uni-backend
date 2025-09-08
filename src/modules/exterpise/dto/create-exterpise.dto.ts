import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateExterpiseDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
