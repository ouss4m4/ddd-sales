import { Router } from "express";

const ordersRouter = Router();

ordersRouter.get("/", (req, res) => {
  res.status(200).send({ Orders: "routers working" });
});

export { ordersRouter };
