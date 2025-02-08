import { IsDateString, IsString } from 'class-validator';

export class CreateScheduleDto {
  title: string;
  description: string;
  time: string;
  location: string;
}
