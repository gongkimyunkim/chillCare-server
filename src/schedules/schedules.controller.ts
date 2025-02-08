import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { UserInfo } from 'src/users/utils/userInfo.decorator';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Controller('schedules')
@UseGuards(AuthGuard('jwt'))
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Get()
  async findAll() {
    return this.schedulesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.schedulesService.findOne(id);
  }

  @Post('')
  async create(user: User, @Body() createScheduledto: CreateScheduleDto) {
    return this.schedulesService.create(user, createScheduledto);
  }
}
