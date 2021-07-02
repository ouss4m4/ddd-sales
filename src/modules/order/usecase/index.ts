import { CreateOrderUseCase } from "./createOrder";
import { CreateOrderController } from "./createOrder.controller";
import { orderRepo } from "../repo";

const createOrderUseCase = new CreateOrderUseCase(orderRepo);
export const createOrderController = new CreateOrderController(createOrderUseCase);
