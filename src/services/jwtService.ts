import jwt from 'jsonwebtoken';
import { ICreateToken } from '../interfaces/IToken';

export const createToken = (data: ICreateToken):string => {
  const options: jwt.SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const token: string = jwt.sign(data, 'suaSenhaForte', options);
  return token;
};

export default {
  createToken,
};
