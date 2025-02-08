import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Schedule } from './entities/schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseStrategy } from 'src/strategies/response.strategy';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
    private usersService: UsersService,
    private responseStrategy: ResponseStrategy,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(caregiver: User, createScheduleDto: CreateScheduleDto) {
    try {
      const newSchedule = this.scheduleRepository.create({
        ...createScheduleDto,
        caregiver,
      });

      await this.scheduleRepository.save(newSchedule);
      return this.responseStrategy.success(
        'Schedule create successfully',
        newSchedule,
      );
    } catch (error) {
      return this.responseStrategy.error('Failed to create schedule', error);
    }
  }

  async update(
    caregiver: User,
    scheduleId: number,
    updateScheduleDto: UpdateScheduleDto,
  ) {
    try {
      const schedule = await this.scheduleRepository.findOne({
        where: { id: scheduleId },
        relations: ['caregiver'],
      });
      if (!schedule) {
        return this.responseStrategy.notFound('Schedule not found');
      }

      await this.scheduleRepository.update(scheduleId, updateScheduleDto);

      const updatedSchedule = await this.scheduleRepository.findOne({
        where: { id: scheduleId },
      });

      await this.scheduleRepository.save(updatedSchedule);
      return this.responseStrategy.success(
        'Schedule create successfully',
        updatedSchedule,
      );
    } catch (error) {
      return this.responseStrategy.error('Failed to create schedule', error);
    }
  }

  async delete(caregiver: User, scheduleId: number) {
    try {
      const schedule = await this.scheduleRepository.findOne({
        where: { id: scheduleId },
        relations: ['caregiver'],
      });
      if (!schedule) {
        return this.responseStrategy.notFound('Schedule not found');
      }
      await this.scheduleRepository.delete(schedule);
      return this.responseStrategy.success('Schedule deleted successfully');
    } catch (error) {
      return this.responseStrategy.error('Failed to delete schedule', error);
    }
  }
}
