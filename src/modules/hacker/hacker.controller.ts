import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HackerService } from './hacker.service';
import { CreateHackerDto } from './dto';

@Controller('hacker')
export class HackerController {
  constructor(private readonly hackerService: HackerService) {}

  @Post()
  register(@Body() dto: CreateHackerDto) {
    return this.hackerService.register(dto);
  }
}
