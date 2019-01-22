import { Get, Post, Controller, Param, Body, Put, Delete, Session } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.entity'
import { AccountsService } from '../accounts/accounts.service'
import { TransactionsDTO } from './transactions.dto';
import { TransactionType } from './transactions.enums';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService, private readonly accountsService: AccountsService) { }

    @Get()
    async gettransactions(): Promise<Transaction[]> {
        return await this.transactionsService.getAlltransactions()
    }

    @Get(':id')
    async gettransaction(@Param('id') id): Promise<Transaction> {
        return await this.transactionsService.gettransaction(id);
    }

    @Post()
    async createtransaction(@Body() transactionDTO: TransactionsDTO): Promise<Transaction> {
        const account = await this.accountsService.getAccount(transactionDTO.account.id)
        if (!account) {
            throw new Error('Account Not Found')
            //HTTP RESPONSE NOT ERROR
        }
        if (transactionDTO.type != TransactionType.Spending && transactionDTO.type != TransactionType.Income) {
            throw new Error('Invalid Transaction Type')
        }
        transactionDTO.account = account
        transactionDTO.amount = Number(transactionDTO.amount)
        return await this.transactionsService.createAndSavetransaction(transactionDTO);
    }

    @Delete(':id')
    async removetransaction(@Param('id') id): Promise<Transaction> {
        return this.transactionsService.removetransaction(id)
    }

}
