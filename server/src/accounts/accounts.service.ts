import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { AccountsDTO } from './accounts.dto';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private readonly accountsRepository: Repository<Account>
    ) { }

    async getAccount(id): Promise<Account> {
        return await this.accountsRepository.findOne(id, { relations: ['user', 'transactions'] })
    }

    async getAllAccounts(): Promise<Account[]> {
        return await this.accountsRepository.find({ relations: ['user', 'transactions'] })
    }

    async createAndSaveAccount(accountDTO: AccountsDTO): Promise<Account> {
        const account = this.accountsRepository.create(accountDTO)
        const savedAccount = await this.accountsRepository.save(account)
        await this.accountsRepository.update(account, { budget: accountDTO.budget, period: accountDTO.period, remaining: accountDTO.budget })
        return await this.getAccount(savedAccount.id)
    }

    async removeAccount(AccountID: number): Promise<Account> {
        const account = await this.getAccount(AccountID)
        return await this.accountsRepository.remove(account)
    }
}