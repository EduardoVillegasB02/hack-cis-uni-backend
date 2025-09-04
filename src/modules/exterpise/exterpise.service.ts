import { Injectable } from '@nestjs/common';
import { CreateExterpiseDto } from './dto/create-exterpise.dto';
import { UpdateExterpiseDto } from './dto/update-exterpise.dto';

@Injectable()
export class ExterpiseService {
  create(createExterpiseDto: CreateExterpiseDto) {
    return 'This action adds a new exterpise';
  }

  findAll() {
    return `This action returns all exterpise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exterpise`;
  }

  update(id: number, updateExterpiseDto: UpdateExterpiseDto) {
    return `This action updates a #${id} exterpise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exterpise`;
  }
}
