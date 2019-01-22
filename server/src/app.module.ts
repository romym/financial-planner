import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'
import { AccountsModule } from './accounts/accounts.module'
import { TransactionsModule } from 'transactions/transactions.module';
import { Session } from './session/session.entity'
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AccountsModule, TransactionsModule, TypeOrmModule.forFeature([Session])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
