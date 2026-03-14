import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mundo,\nYo soy ALejandro, desde NestJs!';
  }
}
