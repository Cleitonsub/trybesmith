import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import HttpException from '../validations/HttpException';

export const errorHandlerMiddleware:
ErrorRequestHandler = async (err, _req: Request, res: Response, next: NextFunction) => {
  const { status, message } = err as HttpException;
  
  res.status(status || 500).json({ message });
  next();
};

export default errorHandlerMiddleware;