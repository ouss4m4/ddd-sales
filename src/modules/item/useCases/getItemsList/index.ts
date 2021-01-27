import { GetItemsListUseCase } from "./getItemsList.usecase";
import { GetItemsListController } from "./getItemsList.controller";
import { itemRepo } from "../../repo";

const getItemsListUseCase = new GetItemsListUseCase(itemRepo);
export const getItemsListController = new GetItemsListController(getItemsListUseCase);
