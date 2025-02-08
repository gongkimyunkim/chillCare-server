import { Application } from 'src/applications/entities/application.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.schedules)
  caregiver: User;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'timestamp' })
  start_time: Date;

  @Column({ type: 'timestamp' })
  end_time: Date;

  @Column()
  location: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => Application, (application) => application.schedule)
  applications: Application[];
}
