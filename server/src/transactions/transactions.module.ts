import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from 'accounts/accounts.module'

@Module({
    imports: [TypeOrmModule.forFeature([Transaction]), AccountsModule],
    controllers: [TransactionsController],
    providers: [TransactionsService],
    exports: [TransactionsService]
})
export class TransactionsModule { }
