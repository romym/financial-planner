import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
import { Account } from '../accounts/accounts.entity'


@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 150 })
    user: string;

    @Column()
    expiredAt: number;

    @Column("text")
    json: string;
}