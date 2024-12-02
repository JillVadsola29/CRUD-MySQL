import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ user_id: id });
    }

    create(user: User): Promise<User> {
        return this.usersRepository.save(user);
    }

    async update(id: number, user: Partial<User>): Promise<void> {
        await this.usersRepository.update(id, user);
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}