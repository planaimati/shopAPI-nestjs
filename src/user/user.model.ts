import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export interface UserInterface {
  email: string,
  password: string,
  admin: boolean

}
