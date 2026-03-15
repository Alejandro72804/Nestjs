import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { CreateUserDto, UpdUserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User with id ${id} not found');
    }
    return user;
  }

  async getUserById(id: number) {
    const user = await this.findOne(id);
    if (user.id === 1) {
      throw new ForbiddenException('You are not allowed to access this user');
    }
    return user;
  }

  async create(body: CreateUserDto) {
    try {
      const newUser = await this.usersRepository.save(body);
      return newUser;
    } catch {
      throw new BadRequestException('Error creating user');
    }
  }

  async update(id: number, changes: UpdUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User with id: ' + id + ' not found');
    }
    const updUser = this.usersRepository.merge(user, changes);
    return this.usersRepository.save(updUser);
  }

  async delete(id: number) {
    const user = await this.findOne(id);
    await this.usersRepository.delete(user.id);
    return {
      message: 'User Delete',
    };
  }
}
