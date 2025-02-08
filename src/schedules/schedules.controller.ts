import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { UserInfo } from 'src/users/utils/userInfo.decorator';

@Controller('schedules')
@UseGuards(AuthGuard('jwt'))
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Get()
  async findAll() {
    return this.schedulesService.findAll();
  }

  @Get(':schedule_id')
  async findOne(@Param('schedule_id') schedule_id: number) {
    return this.schedulesService.findOne(schedule_id);
  }
}
