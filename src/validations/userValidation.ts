import { IUser } from '../interfaces/IUser';
import HttpException from './HttpException';

export const validateUserName = (username: string) => {
  if (!username) throw new HttpException(400, '"username" is required');
  if (typeof username !== 'string') {
    throw new HttpException(422, '"username" must be a string');
  }
  if (username.length <= 2) {
    throw new HttpException(422, '"username" length must be at least 3 characters long');
  }
  return true;
};

export const validateClasse = (classe: string) => {
  if (!classe) throw new HttpException(400, '"classe" is required');
  if (typeof classe !== 'string') {
    throw new HttpException(422, '"classe" must be a string');
  }
  if (classe.length <= 2) {
    throw new HttpException(422, '"classe" length must be at least 3 characters long');
  }
  return true;
};

export const validateLevel = (level: number) => {
  if (level <= 0) {
    throw new HttpException(422, '"level" must be greater than or equal to 1');
  }
  if (!level) throw new HttpException(400, '"level" is required');
  if (typeof level !== 'number') {
    throw new HttpException(422, '"level" must be a number');
  }
  return true;
};

export const validatePassword = (password: string) => {
  if (!password) throw new HttpException(400, '"password" is required');
  if (typeof password !== 'string') {
    throw new HttpException(422, '"password" must be a string');
  }
  if (password.length < 8) {
    throw new HttpException(422, '"password" length must be at least 8 characters long');
  }
  return true;
};

export const validateCreateUserBody = (user: IUser) => {
  const { username, classe, level, password } = user;
  validateUserName(username);
  validateClasse(classe);
  validateLevel(level);
  validatePassword(password);
  return true;
};

export default {
  validateUserName,
  validateClasse,
  validateLevel,
  validatePassword,
  validateCreateUserBody,
};
