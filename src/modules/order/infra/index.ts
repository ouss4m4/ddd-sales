import { Router } from "express";
import { createOrderController } from "../usecases/createOrder";
import { getOrdersController } from "../usecases/getOrders";

const ordersRouter = Router();

ordersRouter.post("/", (req, res) => createOrderController.execute(req, res));
ordersRouter.get("/", (req, res) => getOrdersController.execute(req, res));

export { ordersRouter };
