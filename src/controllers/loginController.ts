import { Request, Response, NextFunction } from 'express';
import { ILogin } from '../interfaces/ILogin';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const loginData = req.body as ILogin;
      const result = await this.loginService.signUp(loginData);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
