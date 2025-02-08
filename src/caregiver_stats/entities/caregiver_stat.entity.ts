import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('caregiver_stat')
export class CaregiverStat {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'total_children' })
  total_children: number;

  @Column({ name: 'total_report' })
  total_report: number;

  //   @ManyToOne(() => User, (user) => user.caregiver_stat)
  //   @JoinColumn({ name: 'caregiver_id', referencedColumnName: 'id' })
  //   caregiver: User;
}
