import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/IProduct';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct) {
    const { name, amount } = product;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId: id } = result;

    const newProduct: IProduct = { id, name, amount };
    return newProduct;
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return result as IProduct[];
  }
}
