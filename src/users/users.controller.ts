import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';

interface Users {
  id?: string;
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

  // //opcional:
  @Post()
  createUser(@Body() body: Users) {
    const newUser = {
      ...body,
      id: (this.users.length + 1).toString(),
    };
    this.users.push(newUser);
    return newUser;
  }
  //Alternativa, corta pero no tan profesional
  //  @Post()
  // createUser(@Body() body: Users) {
  //   const nid = this.users.length + 1;
  //   body.id = nid.toString();
  //   this.users.push(body);
  //   return body;
  // }

  @Delete(':id')
  delUser(@Param('id') id: string) {
    this.users = this.users.filter((user) => user.id !== id);
    return {
      message: 'User Delete',
    };
  }
  @Put(':id')
  updUser(@Param('id') id: string, @Body() body: Users) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return 'User not Found';
    }
    const upUser{
      ...body,
      body
    }
  }
}
