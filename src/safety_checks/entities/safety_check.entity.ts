import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('safety_checks')
export class SafetyCheck {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  caregiver: User;

  @Column({ type: 'timestamp' })
  timestamp: Date;

  @Column({ length: 50 })
  keyword: string;
}
