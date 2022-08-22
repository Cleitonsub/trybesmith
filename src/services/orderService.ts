import OrderModel from '../models/orderModel';
import UserModel from '../models/userModel';
import connection from '../models/connection';
import { productsIdsValidation } from '../validations/productValidation';
import { getUserByToken } from './jwtService';
import { IUserId } from '../interfaces/IUser';

export default class OrderService {
  public orderModel: OrderModel;

  public userModel: UserModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.userModel = new UserModel(connection);
  }

  public getAllOrders = async () => {
    const result = await this.orderModel.getAllOrders();
    return result;
  };

  public createOrder = async (data: number[], token: string) => {
    productsIdsValidation(data);
    const getUser = getUserByToken(token);
    const { id } = await this.userModel.getByUsername(getUser) as IUserId;
    const result = await this.orderModel.createOrder(id, data);
    return result;
  };
}
