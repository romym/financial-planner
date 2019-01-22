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
            //HTTP RESPONSE NOT ERROR
        }
        return await this.accountsService.createAndSaveAccount({ user: user });
    }

    // @Post()
    // async createAccount(@Session() session): Promise<Account> {
    //     console.log(session, 'sessionson')
    //     const user = await this.usersService.getUser(session.user)
    //     if (!user) {
    //         throw new Error('User not found')
    //         //HTTP RESPONSE NOT ERROR
    //     }
    //     return await this.accountsService.createAndSaveAccount({ user: user });
    // }

    @Put(':id')
    async updateBudget(@Param('id') id, @Body() updates: Partial<Account>): Promise<Account> {
        const account = await this.accountsService.getAccount(id)
        if (!account) {
            throw new Error('Account does not exist')
            //HTTP RESPONSE NOT ERROR
        }
        if (updates.period != Period.Month && updates.period != Period.Week) {
            throw new Error('Invalid Period')
        }
        return await this.accountsService.updateBudget(id, updates)
    }

    @Delete(':id')
    async removeAccount(@Param('id') id): Promise<Account> {
        return this.accountsService.removeAccount(id)
    }

}
