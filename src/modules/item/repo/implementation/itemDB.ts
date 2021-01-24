import { ItemModel } from "../../../../shared/infra/database/models/item.model";
import { Item } from "../../domain/item.entity";
import { CreateItemDTO } from "../../useCases/createItem/createItemDTO";
import { GetItemDTO } from "../../useCases/getItem/getItemDTO";
import { IItemRepo } from "../itemRepo";

export class ItemRepo implements IItemRepo {
  public async getById(dto: GetItemDTO): Promise<Item> {
    try {
      const itemDocument = await ItemModel.findByItemCode(dto.itemCode);
      console.log("got an item", itemDocument);
      const item = Item.create(itemDocument);
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async create(data: CreateItemDTO): Promise<Item> {
    // assume data is correct at this point.
    try {
      const itemDocument = await ItemModel.create(data);
      console.log("original response", itemDocument);
      const item = Item.create(itemDocument);
      console.log("initial class");
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }
}
