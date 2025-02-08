import { PartialType } from '@nestjs/mapped-types';
import { CreateSafetyCheckDto } from './create-safety_check.dto';

export class UpdateSafetyCheckDto extends PartialType(CreateSafetyCheckDto) {}
