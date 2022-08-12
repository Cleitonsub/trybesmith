import OrderModel from '../models/orderModel';
import connection from '../models/connection';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public getAllOrders = async () => {
    const result = await this.orderModel.getAllOrders();
    const orderResult = result.map(({ id, userId, productsIds }) => ({
      id,
      userId,
      productsIds: productsIds.split(',').map((productId) => Number(productId)),
    }));
    return orderResult;
  };
}
