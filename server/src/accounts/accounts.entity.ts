import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinTable } from 'typeorm';
import { User } from '../users/users.entity';
import { Period } from './accounts.enums'
import { Transaction } from 'transactions/transactions.entity';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float', { default: 0 })
    spending: number;

    @Column('float', { default: 0 })
    income: number;

    @Column('float', { default: 0 })
    budget: number;

    @Column('float', { default: 0 })
    remaining: number;

    @Column({ default: Period.Month })
    period: Period;

    @OneToMany(type => Transaction, transaction => transaction.account)
    transactions: Transaction[];
    @JoinTable()

    @ManyToOne(type => User, user => user.accounts, { nullable: false })
    user: User

}