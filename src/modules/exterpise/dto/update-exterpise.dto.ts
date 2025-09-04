import { PartialType } from '@nestjs/mapped-types';
import { CreateExterpiseDto } from './create-exterpise.dto';

export class UpdateExterpiseDto extends PartialType(CreateExterpiseDto) {}
