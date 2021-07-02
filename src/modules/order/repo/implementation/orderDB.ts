import { Fail, Result, Success } from "../../../../shared/core/result";
import { OrderModel } from "../../../../shared/infra/database/models/order.model";
import { Order } from "../../domain/order.entity";
import { CreateOrderDTO } from "../../usecases/createOrder/createOrderDTO";

import { IOrderRepo } from "../orderRepo";

export class OrderRepo implements IOrderRepo {
  public async getAll(): Promise<any> {
    try {
      const orderDocument = await OrderModel.find();
      const result = orderDocument.map((raw: any) => Order.create(raw));
      return result;
    } catch (error) {
      throw new Fail<Error>(new Error(error));
    }
  }
  public async create(dto: CreateOrderDTO): Promise<Result<Order, Error>> {
    try {
      const orderDocument = await OrderModel.create(dto);
      const order = Order.create(orderDocument);
      return new Success<Order>(order);
    } catch (error) {
      throw new Fail<Error>(new Error(error));
    }
  }
}
