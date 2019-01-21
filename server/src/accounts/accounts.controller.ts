import { Get, Post, Controller, Param, Body, Put, Delete, Session } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.entity'
import { UsersService } from '../users/users.service'
import { AccountsDTO } from './accounts.dto';

@Controller('accounts')
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
    async createAccount(@Body() accountDTO: AccountsDTO): Promise<Account> {
        console.log(accountDTO, 'asdsda')
        const user = await this.usersService.getUser(accountDTO.user)
        if (!user) {
            throw new Error('User not found')
            //HTTP RESPONSE NOT ERROR
        }
        return await this.AccountsService.createAndSaveAccount({ user: user });
    }

    @Put(':id')
    async updateAccount(@Param('id') id, @Body() updates: Partial<Account>): Promise<Account> {
        return await this.AccountsService.updateAccount(id, updates)
    }

    @Delete(':id')
    async removeAccount(@Param('id') id): Promise<Account> {
        return this.AccountsService.removeAccount(id)
    }

}
