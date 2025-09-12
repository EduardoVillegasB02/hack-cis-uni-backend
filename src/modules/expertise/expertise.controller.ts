import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ExpertiseService } from './expertise.service';
import { CreateExpertiseDto, UpdateExpertiseDto } from './dto';
import { SearchDto } from '../../common/dto';

@Controller('expertise')
export class ExpertiseController {
  constructor(private readonly expertiseService: ExpertiseService) {}

  /* @Post()
  create(@Body() dto: CreateExpertiseDto) {
    return this.expertiseService.create(dto);
  } */

  @Get()
  findAll(@Query() dto: SearchDto) {
    return this.expertiseService.findAll(dto);
  }

  /* @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.expertiseService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateExpertiseDto,
  ) {
    return this.expertiseService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.expertiseService.delete(id);
  } */
}
