import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'users/users.module';
import { UsersService } from 'users/users.service';

@Module({
    imports: [TypeOrmModule.forFeature([Account]), UsersModule],
    controllers: [AccountsController],
    providers: [AccountsService],
    exports: [AccountsService]
})
export class AccountsModule { }
