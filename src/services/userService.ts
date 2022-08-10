import { IUser } from '../interfaces/IUser';
import UserModel from '../models/userModel';
import connection from '../models/connection';
import { createToken } from './jwtService';
import HttpException from '../validations/HttpException';
import { validateUser } from '../validations/userValidation';

export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public createUser = async (user: IUser) => {
    validateUser(user);
    const userExists = await this.userModel.getByUsername(user.username);
    if (userExists) throw new HttpException('NotFoundError', 'Pessoa já cadastrada');
    const { username } = await this.userModel.create(user);
    const token = createToken({ username });
    return { token };
  };
}
