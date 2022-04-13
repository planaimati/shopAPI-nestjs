import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserInterface>,
  ) {}
  async findUser(username: string) {
    const user = this.userModel.find({ email: username });
    return user;
  }
}
