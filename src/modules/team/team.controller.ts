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
import { TeamService } from './team.service';
import { CreateTeamDto, UpdateTeamDto } from './dto';
import { SearchDto } from '../../common/dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  /* @Post()
  create(@Body() dto: CreateTeamDto) {
    return this.teamService.create(dto);
  } */

  @Get()
  findAll(@Query() dto: SearchDto) {
    return this.teamService.findAll(dto);
  }

  /* @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.teamService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateTeamDto,
  ) {
    return this.teamService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.teamService.delete(id);
  } */
}
