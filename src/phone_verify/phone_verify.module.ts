import { Module } from '@nestjs/common';
import { PhoneVerifyService } from './phone_verify.service';
import { PhoneVerifyController } from './phone_verify.controller';

@Module({
  controllers: [PhoneVerifyController],
  providers: [PhoneVerifyService],
})
export class PhoneVerifyModule {}
