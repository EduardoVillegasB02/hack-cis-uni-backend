import { PartialType } from '@nestjs/mapped-types';
import { CreateHackerDto } from './create-hacker.dto';

export class UpdateHackerDto extends PartialType(CreateHackerDto) {}
