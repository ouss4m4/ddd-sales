import { ItemModel } from "../../../../shared/infra/database/models/item.model";
import { CreateItemDTO } from "../../useCases/createItem/createItemDTO";
import { IItemRepo } from "../itemRepo";

export class ItemRepo implements IItemRepo {
  public async create(data: CreateItemDTO): Promise<any> {
    // assume data is correct at this point.
    try {
      const item = await ItemModel.create(data);
      return item;
    } catch (error) {
      throw new Error(error);
    }
  }
}
