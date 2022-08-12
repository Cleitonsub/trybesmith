import OrderModel from '../models/orderModel';
import connection from '../models/connection';

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public getAllOrders = async () => {
    const result = await this.orderModel.getAllOrders();
    return result;
  };
}
