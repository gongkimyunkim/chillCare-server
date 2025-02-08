import { Application } from 'src/applications/entities/application.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'title' })
  title: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'start_time' })
  start_time: Date;

  @Column({ name: 'end_time' })
  end_time: Date;

  @Column({ name: 'location' })
  location: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.schedule)
  @JoinColumn({ name: 'caregiver_id', referencedColumnName: 'id' })
  caregiver: User;

  //   @OneToMany(() => Application, (application) => application.schedule)
  //   @JoinColumn({ name: 'schedule_id', referencedColumnName: 'id' })
  //   schedule: [];
}
