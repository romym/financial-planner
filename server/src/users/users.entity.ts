import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
import { Account } from '../accounts/accounts.entity'


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Account, account => account.user)
    accounts: Account[];
    @JoinTable()

    @Column({ length: 150 })
    name: string;

    @Column({ length: 150 })
    email: string;
}