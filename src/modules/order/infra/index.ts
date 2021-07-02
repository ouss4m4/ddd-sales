import { Router } from "express";
import { createOrderController } from "../usecase";

const ordersRouter = Router();

ordersRouter.post("/", (req, res) => createOrderController.execute(req, res));
ordersRouter.get("/", (req, res) => {
  res.status(200).send({ Orders: "routers working" });
});

export { ordersRouter };
