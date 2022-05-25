import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Installs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('char', { length: 40, unique: true })
  idfv: string;

  @Column('varchar', { length: 100, unique: true })
  app_name: string;

  @Column('varchar', { length: 100, unique: true })
  city: string;

  @Column('varchar', { length: 100, unique: true })
  device_model: string;

  @Column({ type: 'date', unique: true })
  install_time: Date;

  @Column({ type: 'date', unique: true })
  date: Date;

  @Column('varchar', { length: 20, unique: true })
  att: string;

  @Column({ type: 'boolean' })
  is_lat: boolean;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
