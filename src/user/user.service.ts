import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    create(createUserDto: CreateUserDto) {
        throw new Error('Method not implemented.');
    }

    findByEmail(email: string) {
        throw new Error('Method not implemented.');
    }

}
