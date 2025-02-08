import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('caregiver_stats')
export class CaregiverStat {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  caregiver: User;

  @Column()
  total_children: number;

  @Column()
  total_report: number;
}
