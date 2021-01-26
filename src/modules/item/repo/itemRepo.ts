import { Item } from "../domain/item.entity";
import { CreateItemDTO } from "../useCases/createItem/createItemDTO";
import { DeleteItemDTO } from "../useCases/deleteItem/deleteItemDTO";
import { EditItemDTO } from "../useCases/editItem/editItemDTO";
import { GetItemDTO } from "../useCases/getItem/getItemDTO";

export interface IItemRepo {
  create(dto: CreateItemDTO): Promise<Item>;
  getById(dto: GetItemDTO): Promise<Item>;
  edit(dto: EditItemDTO): Promise<Item>;
  delete(dto: DeleteItemDTO): Promise<any>;
}
