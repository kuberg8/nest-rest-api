import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'Id',
  })
  id: number;

  @Column({
    name: 'Name',
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    name: 'Age',
    type: 'bigint',
    nullable: false,
  })
  age: number;
}
