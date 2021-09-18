import express from "express";
import { clientsRouter } from "../../../../modules/client/infra";
import { itemsRouter } from "../../../../modules/item/infra";
import { ordersRouter } from "../../../../modules/order/infra";

const v1Router = express.Router();

v1Router.get("/", (req, res) => {
  return res.json({
    message: "Api is up and running",
    user: "/api/v1/client",
    item: "/api/v1/item",
    order: "/api/v1/order",
  });
});

v1Router.use("/client", clientsRouter);
v1Router.use("/item", itemsRouter);
v1Router.use("/order", ordersRouter);

export { v1Router };
