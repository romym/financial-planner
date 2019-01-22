import { Get, Post, Controller, Param, Body, Put, Delete, Session } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity'
import { UsersService } from '../users/users.service'
import { AccountsDTO } from './accounts.dto';
import { Period } from './accounts.enums'

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService, private readonly usersService: UsersService) { }

    @Get()
    async getAccounts(): Promise<Account[]> {
        return await this.accountsService.getAllAccounts()
    }

    @Get(':id')
    async getAccount(@Param('id') id): Promise<Account> {
        return await this.accountsService.getAccount(id);
    }

    @Post()
    async createAccount(@Body() accountDTO: AccountsDTO): Promise<Account> {
        const user = await this.usersService.getUser(accountDTO.user)
        if (!user) {
            throw new Error('User not found')
        }
        if (accountDTO.period != Period.Month && accountDTO.period != Period.Week) {
            throw new Error('Invalid Period')
        }
        return await this.accountsService.createAndSaveAccount({ user: user, budget: accountDTO.budget, period: accountDTO.period });
    }

    @Delete(':id')
    async removeAccount(@Param('id') id): Promise<Account> {
        return this.accountsService.removeAccount(id)
    }

}
