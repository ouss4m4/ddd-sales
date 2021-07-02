import { Result } from "../../../shared/core/result";
import { Order } from "../domain/order.entity";
import { CreateOrderDTO } from "../usecases/createOrder/createOrderDTO";

export interface IOrderRepo {
  create(dto: CreateOrderDTO): Promise<Result<Order, Error>>;
  getAll(): Promise<Order[]>;
}
