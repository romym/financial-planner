import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UsersDTO } from './users.dto';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly UsersRepository: Repository<User>
    ) { }

    async saveUser(User: User): Promise<User> {
        return await this.UsersRepository.save(User)
    }

    async getUser(id): Promise<User> {
        return await this.UsersRepository.findOne(id, {
            relations: ['accounts']
        })
    }

    async getAllUsers(): Promise<User[]> {
        return await this.UsersRepository.find({ relations: ['accounts'] })
    }

    async createAndSaveUser(UserDTO: UsersDTO): Promise<User> {
        const User = this.UsersRepository.create(UserDTO)
        const savedUser = await this.UsersRepository.save(User)
        return await this.getUser(savedUser.id)
    }
}
