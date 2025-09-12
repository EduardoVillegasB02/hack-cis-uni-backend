import { Test, TestingModule } from '@nestjs/testing';
import { HackerService } from './hacker.service';

describe('HackerService', () => {
  let service: HackerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HackerService],
    }).compile();

    service = module.get<HackerService>(HackerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
