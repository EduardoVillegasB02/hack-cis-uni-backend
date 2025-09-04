import { Test, TestingModule } from '@nestjs/testing';
import { ExterpiseController } from './exterpise.controller';
import { ExterpiseService } from './exterpise.service';

describe('ExterpiseController', () => {
  let controller: ExterpiseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExterpiseController],
      providers: [ExterpiseService],
    }).compile();

    controller = module.get<ExterpiseController>(ExterpiseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
