import { Injectable, NotFoundException } from '@nestjs/common';
import { IUsers } from './user.model';
import { CreateUserDto, UpdUserDto } from './user.dto';

@Injectable()
export class UsersService {
  private users: IUsers[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
    {
      id: '3',
      name: 'Maribel Montalvo',
      email: 'maribel.montalvo@example.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      throw new NotFoundException('User with id ${id} not found');
    }
    return this.users[position];
  }

  create(body: CreateUserDto) {
    const newUser = {
      ...body,
      id: (this.users.length + 1).toString(),
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, changes: UpdUserDto) {
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      throw new NotFoundException('User with id ${id} not found');
    }
    const currentData = this.users[position];
    const updUser: IUsers = {
      ...currentData,
      ...(changes as Partial<IUsers>),
    };
    this.users[position] = updUser;
    return this.users[position];
  }

  delete(id: string) {
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      throw new NotFoundException('User with id ${id} not found');
    }
    this.users = this.users.filter((user) => user.id !== id);
    return {
      message: 'User Delete',
    };
  }
}
