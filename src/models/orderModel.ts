import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/IOrder';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    // Funcao GROUP_CONCAT pesquisado no google, link:
    // https://acervolima.com/mysql-funcao-group_concat/
    const [result] = await this.connection.execute(
      `SELECT orders.id, userId, GROUP_CONCAT(DISTINCT products.id) AS productsIds
      FROM Trybesmith.Orders AS orders INNER JOIN Trybesmith.Products AS products
      ON products.orderId = orders.id
      GROUP BY orders.id
      ORDER BY userId`,
    );
    return result as IOrder[];
  }
}
