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

  public createOrder = async (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;
    const token = req.headers.authorization;
    try {
      const result = await this.orderService.createOrder(productsIds, token as string);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
}