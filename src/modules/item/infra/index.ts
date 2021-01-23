import { Router } from "express";
import { createItemController } from "../useCases/createItem";

const itemsRouter = Router();

itemsRouter.get("/", (req, res) => {
  res.status(200).send({ Items: "router working" });
});

itemsRouter.post("/", (req, res) => createItemController.execute(req, res));

export { itemsRouter };
