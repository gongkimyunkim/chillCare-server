import { PartialType } from '@nestjs/mapped-types';
import { CreateCaregiverStatDto } from './create-caregiver_stat.dto';

export class UpdateCaregiverStatDto extends PartialType(CreateCaregiverStatDto) {}
