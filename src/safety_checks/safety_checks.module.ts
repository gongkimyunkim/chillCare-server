import { Module } from '@nestjs/common';
import { SafetyChecksService } from './safety_checks.service';
import { SafetyChecksController } from './safety_checks.controller';

@Module({
  controllers: [SafetyChecksController],
  providers: [SafetyChecksService],
})
export class SafetyChecksModule {}
