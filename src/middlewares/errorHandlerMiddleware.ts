import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

export const errorHandlerMiddleware:
ErrorRequestHandler = async (err, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err;

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'Unauthorized':
      res.status(401).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      res.status(500).json({ message });
  }
  next();
};

export default errorHandlerMiddleware;