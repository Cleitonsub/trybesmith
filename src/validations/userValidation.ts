import Joi, { ValidationResult } from 'joi';
import { IUser } from '../interfaces/IUser';
import { ILogin } from '../interfaces/ILogin';

export const validateUser = (data: IUser): ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().required(),
    classe: Joi.string().required(),
    level: Joi.number().required(),
    password: Joi.string().required(),
  });
  const { error, value } = schema.validate(data);
  if (error) throw error;
  return value;
};

export const validateLoginBody = (loginData: ILogin): ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().min(1).required(),
    password: Joi.string().min(1).required(),
  });
  const { error, value } = schema.validate(loginData);
  if (error) throw error;
  return value;
};

export default {
  validateUser,
  validateLoginBody,
};