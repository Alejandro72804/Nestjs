import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';

interface Users {
  id: string;
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  private users: Users[] = [
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

  @Get()
  getUsers() {
    return this.users;
  }
  @Get(':id')
  findUser(@Param('id') id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return {
        error: 'User not found',
      };
    }
    return user;
  }
  @Post()
  createUser(@Body() body: Users) {
    this.users.push(body);
    return Body;
  }
  @Delete(':id')
  delUser(@Param('id') id: string) {
    this.users = this.users.filter((user) => user.id !== id);
    return {
      message: 'User Delete',
    };
  }
}
