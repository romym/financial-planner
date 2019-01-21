import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/users.entity';

enum Period {
    Week = "week",
    Month = 'month'
}

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    spending: number;

    @Column({ default: 0 })
    income: number;

    @Column({ default: 0 })
    budget: number;

    @Column({ default: 0 })
    remaining: number;

    @Column({ default: 0 })
    period: Period;

    @ManyToOne(type => User, user => user.accounts)
    user: string
}