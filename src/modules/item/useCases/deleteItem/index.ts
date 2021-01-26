import { DeleteItem } from "./deleteItem.usecase";
import { DeleteItemController } from "./deleteItem.controller";
import { itemRepo } from "../../repo";

const deleteItem = new DeleteItem(itemRepo);
export const deleteItemController = new DeleteItemController(deleteItem);
