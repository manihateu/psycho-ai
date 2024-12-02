import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(name: string, email: string, password: string, role: "USER" | "ADMIN") {
    const user = await this.usersService.createUser(name, email, password, role);
    return this.generateTokens(user.id, user.email, user.role);
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) throw new UnauthorizedException('Invalid credentials');

    return this.generateTokens(user.id, user.email, user.role);
  }

  generateTokens(userId: number, email: string, role: "USER" | "ADMIN") {
    const payload = { sub: userId, email, role };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }
}
