import { Get, Post, Controller, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from './users.dto'
import { User } from './users.entity'


@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) { }

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.UsersService.getAllUsers()
    }

    @Get(':id')
    async getUser(@Param('id') id): Promise<User> {
        return await this.UsersService.getUser(id);
    }

    @Post()
    async create(@Body() UserDTO: UsersDTO): Promise<User> {
        return await this.UsersService.createAndSaveUser(UserDTO);
    }
}
