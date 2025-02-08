import { IsDateString, IsString } from 'class-validator';

export class CreateScheduleDto {
  title: string;
  description: string;
  start_time: string;
  location: string;
}
