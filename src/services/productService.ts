import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/productModel';
import connection from '../models/connection';
// import HttpException from '../validations/HttpException';
// import { validateUser } from '../validations/userValidation';

export default class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public createProduct = async (product: IProduct) => {
    const result = await this.productModel.create(product);
    return result;
  };
}
