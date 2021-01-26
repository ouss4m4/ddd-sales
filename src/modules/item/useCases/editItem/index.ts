import { EditItem } from "./editItem.usecase";
import { EditItemController } from "./editItem.controller";
import { itemRepo } from "../../repo";

const editItem = new EditItem(itemRepo);
export const editItemController = new EditItemController(editItem);
