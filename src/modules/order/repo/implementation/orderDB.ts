import { Fail, Result, Success } from "../../../../shared/core/result";
import { OrderModel } from "../../../../shared/infra/database/models/order.model";
import { Order } from "../../domain/order.entity";
import { CreateOrderDTO } from "../../usecase/createOrderDTO";
import { IOrderRepo } from "../orderRepo";

export class OrderRepo implements IOrderRepo {
  public async create(dto: CreateOrderDTO): Promise<Result<Order, Error>> {
    try {
      const orderDocument = await OrderModel.create(dto);
      console.log("original response", orderDocument);
      const order = Order.create(orderDocument);
      console.log("initial class", order);
      return new Success<Order>(order);
    } catch (error) {
      throw new Fail<Error>(new Error(error));
    }
  }
}
