import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';
import { ResponseStrategy } from 'src/strategies/response.strategy';
import { Schedule } from './entities/schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule, User]), UsersModule],
  providers: [SchedulesService, ResponseStrategy],
  controllers: [SchedulesController],
})
export class SchedulesModule {}
