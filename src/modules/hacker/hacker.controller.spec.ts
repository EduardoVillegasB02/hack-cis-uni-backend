import { Test, TestingModule } from '@nestjs/testing';
import { HackerController } from './hacker.controller';
import { HackerService } from './hacker.service';

describe('HackerController', () => {
  let controller: HackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HackerController],
      providers: [HackerService],
    }).compile();

    controller = module.get<HackerController>(HackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
