import { Get, Post, Controller, Param, Body, Put, Delete, Session } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity'
import { UsersService } from '../users/users.service'
import { AccountsDTO } from './accounts.dto';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService, private readonly usersService: UsersService) { }

    @Get()
    async getAccounts(): Promise<Account[]> {
        return await this.accountsService.getAllAccounts()
    }

    // @Get('genres')
    // async getRankingsByGenre() {
    //     return await this.AccountsService.rankGenresByMostAccounts()
    // }

    // @Get('years')
    // async getRankingsByYear() {
    //     return await this.AccountsService.rankYearsByMostAccounts()
    // }

    @Get(':id')
    async getAccount(@Param('id') id): Promise<Account> {
        return await this.accountsService.getAccount(id);
    }

    @Post()
    async createAccount(@Body() accountDTO: AccountsDTO): Promise<Account> {
        console.log(accountDTO, 'asdsda')
        const user = await this.usersService.getUser(accountDTO.user)
        if (!user) {
            throw new Error('User not found')
            //HTTP RESPONSE NOT ERROR
        }
        return await this.accountsService.createAndSaveAccount({ user: user });
    }

    @Put(':id')
    async updateAccount(@Param('id') id, @Body() updates: Partial<Account>): Promise<Account> {
        const account = await this.accountsService.getAccount(id)
        if (!account) {
            throw new Error('Account does not exist')
            //HTTP RESPONSE NOT ERROR
        }
        return await this.accountsService.updateSettings(id, updates)
    }

    @Delete(':id')
    async removeAccount(@Param('id') id): Promise<Account> {
        return this.accountsService.removeAccount(id)
    }

}
