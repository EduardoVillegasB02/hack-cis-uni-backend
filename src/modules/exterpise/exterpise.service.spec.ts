import { Test, TestingModule } from '@nestjs/testing';
import { ExterpiseService } from './exterpise.service';

describe('ExterpiseService', () => {
  let service: ExterpiseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExterpiseService],
    }).compile();

    service = module.get<ExterpiseService>(ExterpiseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
