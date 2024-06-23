import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class RequestLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  method: string;

  @Column()
  path: string;

  @Column('text')
  queryParams: string;

  @CreateDateColumn()
  timestamp: Date;
}
