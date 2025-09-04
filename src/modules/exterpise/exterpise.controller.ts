import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExterpiseService } from './exterpise.service';
import { CreateExterpiseDto } from './dto/create-exterpise.dto';
import { UpdateExterpiseDto } from './dto/update-exterpise.dto';

@Controller('exterpise')
export class ExterpiseController {
  constructor(private readonly exterpiseService: ExterpiseService) {}

  @Post()
  create(@Body() createExterpiseDto: CreateExterpiseDto) {
    return this.exterpiseService.create(createExterpiseDto);
  }

  @Get()
  findAll() {
    return this.exterpiseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exterpiseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExterpiseDto: UpdateExterpiseDto) {
    return this.exterpiseService.update(+id, updateExterpiseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exterpiseService.remove(+id);
  }
}
