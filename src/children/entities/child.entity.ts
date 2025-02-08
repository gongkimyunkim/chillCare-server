import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('child')
export class Child {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'name' })
  name: string;

  @Column({ name: 'alergies', nullable: true })
  alergies: string;

  @Column({ name: 'health_condition', nullable: true })
  health_condition: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.child)
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
  parent: User;
}
