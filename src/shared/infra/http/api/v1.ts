import express from "express";
import { clientsRouter } from "../../../../modules/client/infra";
import { itemsRouter } from "../../../../modules/item/infra";
import { ordersRouter } from "../../../../modules/order/infra";

const v1Router = express.Router();

v1Router.get("/", (req, res) => {
  return res.json({ message: "Api is up and running" });
});

v1Router.use("/client", clientsRouter);
v1Router.use("/user", itemsRouter);
v1Router.use("/order", ordersRouter);

export { v1Router };
