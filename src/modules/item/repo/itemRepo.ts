import { Item } from "../domain/item.entity";
import { CreateItemDTO } from "../useCases/createItem/createItemDTO";
import { GetItemDTO } from "../useCases/getItem/getItemDTO";

export interface IItemRepo {
  create(dto: CreateItemDTO): Promise<Item>;
  getById(dto: GetItemDTO): Promise<Item>;
}
