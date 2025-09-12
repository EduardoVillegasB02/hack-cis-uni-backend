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
import { EducationService } from './education.service';
import { CreateEducationDto, UpdateEducationDto } from './dto';
import { SearchDto } from '../../common/dto';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  create(@Body() dto: CreateEducationDto) {
    return this.educationService.create(dto);
  }

  @Get()
  findAll(@Query() dto: SearchDto) {
    return this.educationService.findAll(dto);
  }

  /* @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.educationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateEducationDto,
  ) {
    return this.educationService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.educationService.delete(id);
  } */
}
