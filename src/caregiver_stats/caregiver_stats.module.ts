import { Module } from '@nestjs/common';
import { CaregiverStatsService } from './caregiver_stats.service';
import { CaregiverStatsController } from './caregiver_stats.controller';

@Module({
  controllers: [CaregiverStatsController],
  providers: [CaregiverStatsService],
})
export class CaregiverStatsModule {}
