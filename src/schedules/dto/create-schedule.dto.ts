import { IsDateString, IsString } from 'class-validator';

export class CreateScheduleDto {
  title: string;
  description: string;
  start_time: Date;
  end_time: Date;
  location: string;
}
