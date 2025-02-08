import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';
import { ResponseStrategy } from 'src/strategies/response.strategy';
import { Schedule } from './entities/schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET_KEY'),
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Schedule, User]),
    UsersModule,
  ],
  providers: [SchedulesService, ResponseStrategy],
  controllers: [SchedulesController],
})
export class SchedulesModule {}
