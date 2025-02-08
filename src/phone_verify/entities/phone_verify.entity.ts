import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('phone_verifications')
export class PhoneVerification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone_number: string;

  @Column()
  verify_code: string;

  @Column({ default: false })
  is_verified: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'timestamp' })
  expired_at: Date;
}
