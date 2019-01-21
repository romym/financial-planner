import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TransactionType, TransactionCategory } from './transactions.enums';
import { Account } from '../accounts/accounts.entity'

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    memo: string;

    @Column({ default: 0 })
    amount: number;

    @Column({ nullable: false })
    type: TransactionType;

    @Column({ default: TransactionCategory.None })
    category: TransactionCategory;

    @ManyToOne(type => Account, account => account.transactions, { nullable: false })
    account: Account
}