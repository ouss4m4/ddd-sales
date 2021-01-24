import { GetClientDetails } from "./getItem.usecase";
import { GetItemController } from "./getItem.controller";
import { itemRepo } from "../../repo";

const getClientDetails = new GetClientDetails(itemRepo);
export const getItemController = new GetItemController(getClientDetails);
