import { Get, Post, Controller, Param, Body, Put, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity'
import { UsersService } from '../users/users.service'

@Controller('Accounts')
export class AccountsController {
    constructor(private readonly AccountsService: AccountsService, private readonly usersService: UsersService) { }

    @Get()
    async getAccounts(): Promise<Account[]> {
        return await this.AccountsService.getAllAccounts()
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
        return await this.AccountsService.getAccount(id);
    }

    @Post()
    async create(@Body() AccountDTO): Promise<Account> {
        const user = await this.usersService.getUser({ name: AccountDTO.user })
        AccountDTO.user = user ? user : await this.usersService.createAndSaveUser(AccountDTO)
        return await this.AccountsService.createAndSaveAccount(AccountDTO);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updates: Partial<Account>): Promise<Account> {
        return await this.AccountsService.updateAccount(id, updates)
    }

    @Delete(':id')
    async remove(@Param('id') id): Promise<Account> {
        return this.AccountsService.removeAccount(id)
    }

}
