import { Controller, Body, Post, Get } from '@nestjs/common';
import { UserInterface } from './user.model';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/register')
  async registerUser(@Body() body: UserInterface) {
    const user = await this.userService.findUser('addmin');
    console.log(user);
  }

  @Post('/login')
  loginUser(@Body() body: string) {
    console.log(body);
  }

  @Get('/logout')
  logoutUser() {
    console.log('logout');
  }
}
