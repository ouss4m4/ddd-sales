import { orderRepo } from "../../repo";
import { GetOrdersUseCase } from "./getOrder";
import { GetOrdersController } from "./getOrder.controller";

const getOrdersUseCase = new GetOrdersUseCase(orderRepo);
export const getOrdersController = new GetOrdersController(getOrdersUseCase);
