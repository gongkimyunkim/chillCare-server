import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ResponseStrategy } from 'src/strategies/response.strategy';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private responseStrategy: ResponseStrategy,
  ) {}

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id });

      if (!user) {
        return this.responseStrategy.notFound('User not found');
      }

      const userInfo = {
        name: user.name,
        nickname: user.nickname,
        phone_number: user.phone_number,
        birth_date: user.birth_date,
        keyword: user.keyword,
      };

      return this.responseStrategy.success(
        'User retrieved successfully',
        userInfo,
      );
    } catch (error) {
      return this.responseStrategy.error('Failed to retrieve userInfo', error);
    }
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }
}
