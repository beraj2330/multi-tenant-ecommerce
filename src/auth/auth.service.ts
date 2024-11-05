import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    //Calls userService.create() to save a new user to the database.
    async register(createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    //Verifies the user’s credentials. If valid, generates a JWT token with the user’s ID and role. 
    async login(email: string, password: string) {
         
        const user = await this.userService.findByEmail(email);
        
        if (!user || user.password !== password) {
            throw new UnauthorizedException();
        }
        const payload = { id: user.id, role: user.role};
        return { access_token: this.jwtService.sign(payload)};
        
    }
}
