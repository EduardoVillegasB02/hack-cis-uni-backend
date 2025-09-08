import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ExterpiseService } from './exterpise.service';
import { CreateExterpiseDto, UpdateExterpiseDto } from './dto';

@Controller('exterpise')
export class ExterpiseController {
  constructor(private readonly exterpiseService: ExterpiseService) {}

  @Post()
  create(@Body() dto: CreateExterpiseDto) {
    return this.exterpiseService.create(dto);
  }

  @Get()
  findAll() {
    return this.exterpiseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.exterpiseService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateExterpiseDto,
  ) {
    return this.exterpiseService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.exterpiseService.delete(id);
  }
}
