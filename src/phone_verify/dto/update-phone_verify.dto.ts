import { PartialType } from '@nestjs/mapped-types';
import { CreatePhoneVerifyDto } from './create-phone_verify.dto';

export class UpdatePhoneVerifyDto extends PartialType(CreatePhoneVerifyDto) {}
