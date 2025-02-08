import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInfo } from './utils/userInfo.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('info')
  async findOne(@UserInfo('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Get('info')
  async update(@UserInfo('id') id: number) {
    return this.usersService.update(id);
  }
}
