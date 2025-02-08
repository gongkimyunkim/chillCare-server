import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('children')
export class Child {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.children)
  parent: User;

  @Column()
  name: string;

  @Column('text')
  allergies: string;

  @Column('text')
  health_condition: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
