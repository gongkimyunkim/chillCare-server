import { Test, TestingModule } from '@nestjs/testing';
import { CaregiverStatsController } from './caregiver_stats.controller';
import { CaregiverStatsService } from './caregiver_stats.service';

describe('CaregiverStatsController', () => {
  let controller: CaregiverStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaregiverStatsController],
      providers: [CaregiverStatsService],
    }).compile();

    controller = module.get<CaregiverStatsController>(CaregiverStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
