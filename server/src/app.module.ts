import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'
import { AccountsModule } from './accounts/accounts.module'
import { TransactionsModule } from 'transactions/transactions.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AccountsModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
