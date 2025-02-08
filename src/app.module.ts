import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './ormconfig';
import { ConfigModule } from '@nestjs/config';
import { ChildrenModule } from './children/children.module';
import { AuthModule } from './auth/auth.module';
import { PhoneVerifyModule } from './phone_verify/phone_verify.module';
import { SafetyChecksModule } from './safety_checks/safety_checks.module';
import { CaregiverStatsModule } from './caregiver_stats/caregiver_stats.module';
import { ApplicationsModule } from './applications/applications.module';
import { SchedulesModule } from './schedules/schedules.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    UsersModule,
    ChildrenModule,
    ApplicationsModule,
    SchedulesModule,
    CaregiverStatsModule,
    SafetyChecksModule,
    PhoneVerifyModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
