import { ILogin } from '../interfaces/ILogin';
import { createToken } from './jwtService';
import { validateUserName, validatePassword } from '../validations/userValidation';
import connection from '../models/connection';
import UserModel from '../models/userModel';
import HttpException from '../validations/HttpException';

export default class LoginService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public signUp = async (loginData: ILogin) => {
    const { username, password } = loginData;
    validateUserName(username);
    validatePassword(password);
    const userData = await this.userModel.getByUsername(username);
    if (userData?.password !== password || userData.username !== username) {
      throw new HttpException(401, 'Username or password invalid');
    }
    const token = createToken({ username });
    return { token };
  };
}
