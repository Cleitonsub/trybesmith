import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import HttpException from '../validations/HttpException';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new HttpException(401, 'Token not found');
  }
  try {
    jwt.verify(authorization, 'suaSenhaForte');
    next();
  } catch (_err) {
    throw new HttpException(401, 'Invalid token');
  }
};

export default {
  validateToken,
};
