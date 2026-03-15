//creacion de Endpoints utilizando servicios y escalabilidad
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto, UpdUserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  //endpoint
  @Get()
  getUsers() {
    return this.usersService.findAll();
  }
  @Get(':id')
  findUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Delete(':id')
  delUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }

  @Put(':id')
  updUser(@Param('id', ParseIntPipe) id: number, @Body() changes: UpdUserDto) {
    return this.usersService.update(id, changes);
  }
}
