import { ItemModel } from "../../../../shared/infra/database/models/item.model";
import { Item } from "../../domain/item.entity";
import { CreateItemDTO } from "../../useCases/createItem/createItemDTO";
import { DeleteItemDTO } from "../../useCases/deleteItem/deleteItemDTO";
import { EditItemDTO } from "../../useCases/editItem/editItemDTO";
import { GetItemDTO } from "../../useCases/getItem/getItemDTO";
import { GetItemsListDTO } from "../../useCases/getItemsList/getItemsListDTO";
import { IItemRepo } from "../itemRepo";

export class ItemRepo implements IItemRepo {
  public async getList(dto: GetItemsListDTO): Promise<Item[]> {
    try {
      const docList = await ItemModel.find({ itemName: { $regex: dto.itemName, $options: "i" } });
      return docList.map((doc: any) => Item.create(doc));
    } catch (error) {
      throw new Error(error);
    }
  }
  public async delete({ itemCode }: DeleteItemDTO): Promise<any> {
    try {
      const itemDocument = await ItemModel.findOneAndDelete({ itemCode });
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
  public async edit({ itemCode, itemName, stockQty }: EditItemDTO): Promise<Item> {
    try {
      const itemDocument = await ItemModel.findOneAndUpdate({ itemCode }, { itemName, stockQty }, { new: true });
      const item = Item.create(itemDocument);
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }
  public async getById(dto: GetItemDTO): Promise<Item> {
    try {
      const itemDocument = await ItemModel.findByItemCode(dto.itemCode);
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
      const item = Item.create(itemDocument);
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }
}
