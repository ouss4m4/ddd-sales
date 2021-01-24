import { Router } from "express";
import { createItemController } from "../useCases/createItem";
import { getItemController } from "../useCases/getItem";

const itemsRouter = Router();

itemsRouter.get("/", (req, res) => {
  res.status(200).send({ Items: "router working" });
});

itemsRouter.post("/", (req, res) => createItemController.execute(req, res));

itemsRouter.get("/:id", (req, res) => getItemController.execute(req, res));

export { itemsRouter };
