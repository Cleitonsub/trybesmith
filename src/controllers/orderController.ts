import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.orderService.getAllOrders();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}