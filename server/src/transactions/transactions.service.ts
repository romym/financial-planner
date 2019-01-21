import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transactions.entity';
import { TransactionsDTO } from './transactions.dto';

@Injectable()
export class transactionsService {
    constructor(
        @InjectRepository(Transaction)
        private readonly transactionsRepository: Repository<Transaction>
    ) { }

    async gettransaction(id): Promise<Transaction> {
        return await this.transactionsRepository.findOne(id, { relations: ['user'] })
    }

    async getAlltransactions(): Promise<Transaction[]> {
        return await this.transactionsRepository.find({ relations: ['user'] })
    }

    async createAndSavetransaction(transactionDTO: TransactionsDTO): Promise<Transaction> {
        const transaction = this.transactionsRepository.create(transactionDTO)
        const savedtransaction = await this.transactionsRepository.save(transaction)
        return await this.gettransaction(savedtransaction)
    }

    async removetransaction(transactionID: number): Promise<Transaction> {
        const transaction = await this.gettransaction(transactionID)
        return await this.transactionsRepository.remove(transaction)
    }

    // async rankGenresByMosttransactions() {
    //     const transactions = await this.getAlltransactions()
    //     const genreRankings = {}
    //     for (let i = 0; i <= transactions.length - 1; i++) {
    //         if (genreRankings[transactions[i].genre] >= 0) {
    //             genreRankings[transactions[i].genre] += 1
    //         }
    //         else {
    //             genreRankings[transactions[i].genre] = 0
    //         }
    //     }
    //     return genreRankings
    // }

    // async rankYearsByMosttransactions() {
    //     const transactions = await this.getAlltransactions()
    //     const yearsRankings = {}
    //     for (let i = 0; i <= transactions.length - 1; i++) {
    //         if (yearsRankings[transactions[i].year] >= 0) {
    //             yearsRankings[transactions[i].year] += 1
    //         }
    //         else {
    //             yearsRankings[transactions[i].year] = 0
    //         }
    //     }
    //     return yearsRankings
    // }
}