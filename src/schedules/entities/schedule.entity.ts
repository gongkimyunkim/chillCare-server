import { Application } from 'src/applications/entities/application.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.schedules)
  @JoinColumn({ name: 'caregiver', referencedColumnName: 'id' })
  caregiver: User;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  time: string;

  @Column()
  location: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => Application, (application) => application.schedule)
  applications: Application[];
}
