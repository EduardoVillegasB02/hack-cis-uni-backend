import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExpertiseDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
