import { Result } from "../../../shared/core/result";
import { Order } from "../domain/order.entity";
import { CreateOrderDTO } from "../usecase/createOrderDTO";

export interface IOrderRepo {
  create(dto: CreateOrderDTO): Promise<Result<Order, Error>>;
  /*  getById(dto: GetItemDTO): Promise<Item>;
  edit(dto: EditItemDTO): Promise<Item>;
  delete(dto: DeleteItemDTO): Promise<any>;
  getList(dto: GetItemsListDTO): Promise<Item[]>; */
}
