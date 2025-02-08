import { Schedule } from 'src/schedules/entities/schedule.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Schedule, (schedule) => schedule.applications)
  schedule: Schedule;

  @ManyToOne(() => User, (user) => user.parentApplications)
  parent: User;

  @ManyToOne(() => User, (user) => user.caregiverApplications)
  caregiver: User;

  @Column({
    type: 'enum',
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  })
  status: 'pending' | 'approved' | 'rejected';
}
