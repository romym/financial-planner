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
        return await this.getAccount(savedAccount)
    }

    async updateBudget(account: number, updates: Partial<Account>): Promise<Account> {
        await this.accountsRepository.update(account, { budget: updates.budget, period: updates.period, remaining: updates.budget })
        return await this.getAccount(account)
    }

    async removeAccount(AccountID: number): Promise<Account> {
        const account = await this.getAccount(AccountID)
        return await this.accountsRepository.remove(account)
    }

    // async rankGenresByMostAccounts() {
    //     const Accounts = await this.getAllAccounts()
    //     const genreRankings = {}
    //     for (let i = 0; i <= Accounts.length - 1; i++) {
    //         if (genreRankings[Accounts[i].genre] >= 0) {
    //             genreRankings[Accounts[i].genre] += 1
    //         }
    //         else {
    //             genreRankings[Accounts[i].genre] = 0
    //         }
    //     }
    //     return genreRankings
    // }

    // async rankYearsByMostAccounts() {
    //     const Accounts = await this.getAllAccounts()
    //     const yearsRankings = {}
    //     for (let i = 0; i <= Accounts.length - 1; i++) {
    //         if (yearsRankings[Accounts[i].year] >= 0) {
    //             yearsRankings[Accounts[i].year] += 1
    //         }
    //         else {
    //             yearsRankings[Accounts[i].year] = 0
    //         }
    //     }
    //     return yearsRankings
    // }
}