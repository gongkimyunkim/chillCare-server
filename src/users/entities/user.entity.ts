import { Application } from 'src/applications/entities/application.entity';
import { Child } from 'src/children/entities/child.entity';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column({ length: 255, unique: true })
  phone_number: string;

  @Column({ length: 255 })
  name: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @Column('varchar', { length: 255, nullable: false, name: 'password' })
  password: string;

  @Column('longtext', { nullable: true, name: 'profile_image' })
  profile_image: string;

  @Column({ type: 'date' })
  birth_date: string;

  @Column({ name: 'keyword', nullable: true })
  keyword: string;

  @Column({ name: 'location' })
  location: string;

  @Column({ name: 'care_chanch', default: 1 })
  care_chanch: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => Child, (child) => child.parent)
  children: Child[];

  @OneToMany(() => Schedule, (schedule) => schedule.caregiver)
  schedules: Schedule[];

  @OneToMany(() => Application, (application) => application.parent)
  parentApplications: Application[];

  @OneToMany(() => Application, (application) => application.caregiver)
  caregiverApplications: Application[];
}
