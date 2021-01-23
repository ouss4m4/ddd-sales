import { CreateItemUseCase } from "./createItem.usecase";

import { itemRepo } from "../../repo";
import { CreateItemController } from "./createItem.controller";

const createItemUseCase = new CreateItemUseCase(itemRepo);
export const createItemController = new CreateItemController(createItemUseCase);
