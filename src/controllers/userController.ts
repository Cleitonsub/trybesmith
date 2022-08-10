import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/IUser';
import UserService from '../services/userService';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body as IUser;
      const result = await this.userService.createUser(user);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
}
