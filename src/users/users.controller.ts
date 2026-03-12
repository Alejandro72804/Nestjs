import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
  NotFoundException,
  UnprocessableEntityException,
  ForbiddenException,
} from '@nestjs/common';

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

  //Control Getter and Setters
  public getterUsers(idx: number): Users {
    return this.users[idx];
  }

  private setterUsers(indx: number, obj: Users) {
    this.users[indx] = {
      ...obj,
    };
  }
  private msjErr(): void {
    throw new NotFoundException('User not Found');
  }

  private msjVerifEmail(): void {
    throw new UnprocessableEntityException('Correo email invalido');
  }

  private msjPermiso(): void {
    throw new ForbiddenException(
      'No tienes autorizaci+on para acceder a esta informacion',
    );
  }

  //endpoint
  @Get()
  getUsers() {
    return this.users;
  }
  @Get(':id')
  findUser(@Param('id') id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      this.msjErr();
    } else if (user.id === '1') {
      this.msjPermiso();
    }
    return user;
  }

  // //opcional:
  @Post()
  createUser(@Body() body: Users) {
    const email = body.email;
    if (
      email &&
      !(email.includes('@') || email.includes('.com') || email.includes('.co'))
    ) {
      this.msjVerifEmail();
    }
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
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      this.msjErr();
    }
    this.users = this.users.filter((user) => user.id !== id);
    return {
      message: 'User Delete',
    };
  }

  @Put(':id')
  updUser(@Param('id') id: string, @Body() changes: Users) {
    const email = changes?.email;
    if (
      email &&
      !(email.includes('@') || email.includes('.com') || email.includes('.co'))
    ) {
      this.msjVerifEmail();
    }
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      this.msjErr();
    }
    const currentDate: Users = this.getterUsers(position);
    const updUser = {
      ...currentDate,
      ...changes,
    };
    this.setterUsers(position, updUser);
    return this.getterUsers(position);
  }
}
