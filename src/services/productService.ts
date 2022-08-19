import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/productModel';
import connection from '../models/connection';
import { productAmountValidation, productNameValidation } from '../validations/productValidation';

export default class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public createProduct = async (product: IProduct) => {
    const { name, amount } = product;
    productNameValidation(name);
    productAmountValidation(amount);
    const result = await this.productModel.create(product);
    return result;
  };

  public getAllProducts = async () => {
    const result = await this.productModel.getAllProducts();
    return result;
  };
}
