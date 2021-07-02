import { orderRepo } from "../../repo";
import { CreateOrderUseCase } from "./createOrder";
import { CreateOrderController } from "./createOrder.controller";

const createOrderUseCase = new CreateOrderUseCase(orderRepo);
export const createOrderController = new CreateOrderController(createOrderUseCase);
