import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transactions.entity';
import { TransactionsDTO } from './transactions.dto';
import { TransactionType } from './transactions.enums';
import { Account } from '../accounts/accounts.entity';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectRepository(Transaction)
        private readonly transactionsRepository: Repository<Transaction>,
        @InjectRepository(Account)
        private readonly accountsRepository: Repository<Account>
    ) { }

    async gettransaction(id): Promise<Transaction> {
        return await this.transactionsRepository.findOne(id, { relations: ['account'] })
    }

    async getAlltransactions(): Promise<Transaction[]> {
        return await this.transactionsRepository.find({ relations: ['account'] })
    }

    async createAndSavetransaction(transactionDTO: TransactionsDTO): Promise<Transaction> {
        await this.updateAccountAfterTransaction(transactionDTO)
        const transaction = this.transactionsRepository.create(transactionDTO)
        const savedtransaction = await this.transactionsRepository.save(transaction)
        return await this.gettransaction(savedtransaction)
    }

    async removetransaction(transactionID: number): Promise<Transaction> {
        const transaction = await this.gettransaction(transactionID)
        return await this.transactionsRepository.remove(transaction)
    }

    async updateAccountAfterTransaction(transactionDTO: TransactionsDTO): Promise<Account> {
        if (transactionDTO.type == TransactionType.Income) {
            return await this.performIncomeTransaction(transactionDTO.account, transactionDTO.amount)
        }
        if (transactionDTO.type == TransactionType.Spending) {
            return await this.performSpendingTransaction(transactionDTO.account, transactionDTO.amount)
        }
    }

    async performIncomeTransaction(account, amount) {
        account.income += amount
        account.remaining = Number((account.remaining + amount).toFixed(2))
        return await this.accountsRepository.save(account)
    }

    async performSpendingTransaction(account, amount) {
        account.spending += amount
        account.remaining = Number((account.remaining - amount).toFixed(2))
        return await this.accountsRepository.save(account)
    }
}