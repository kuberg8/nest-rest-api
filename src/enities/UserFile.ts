import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class UserFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  type: string;

  @Column('bigint')
  size: number;

  @Column('varchar')
  url: string;

  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  userId: number;
}
