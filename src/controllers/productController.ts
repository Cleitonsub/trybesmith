import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces/IProduct';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body as IProduct;
      const result = await this.productService.createProduct(product);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  public getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.productService.getAllProducts();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
