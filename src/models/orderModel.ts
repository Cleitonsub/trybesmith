import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/IOrder';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    // Inspirado no nosso amigo heitortessaro, funcao JSON_ARRAYAGG encontrado em documentacao, link:
    // https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html
    const [result] = await this.connection.execute(
      `SELECT orders.id, userId, JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS products
      ON products.orderId = orders.id
      GROUP BY orders.id
      ORDER BY userId`,
    );
    return result as IOrder[];
  }
}
