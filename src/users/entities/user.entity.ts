import { application } from 'express';
import { Application } from 'src/applications/entities/application.entity';
import { CaregiverStat } from 'src/caregiver_stats/entities/caregiver_stat.entity';
import { Child } from 'src/children/entities/child.entity';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'uid' })
  nickname: string;

  @Column({ type: 'varchar', length: 255, name: 'phone_number' })
  phone_number: string;

  @Column({ type: 'varchar', length: 255, name: 'name' })
  name: string;

  @Column({ type: 'varchar', length: 255, name: 'email' })
  email?: string;

  @Column({ name: 'birth_date' })
  birth_date: Date;

  @Column({ name: 'location' })
  location: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @OneToMany(() => Child, (child) => child.parent)
  child: [];

  @OneToMany(() => Schedule, (schedule) => schedule.caregiver)
  schedule: [];

  // @OneToMany(() => CaregiverStat, {caregiver_stat} => caregiver_stat.caregiver)
  // caregiver_stat: [];

  // @OneToMany(() => Application, {application} => application.user)
  // applications: [];
}
