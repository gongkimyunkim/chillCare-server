import { Test, TestingModule } from '@nestjs/testing';
import { CaregiverStatsService } from './caregiver_stats.service';

describe('CaregiverStatsService', () => {
  let service: CaregiverStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaregiverStatsService],
    }).compile();

    service = module.get<CaregiverStatsService>(CaregiverStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
