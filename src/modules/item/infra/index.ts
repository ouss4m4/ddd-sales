import { Router } from "express";
import { ItemModel } from "../../../shared/infra/database/models/item.model";
import { createItemController } from "../useCases/createItem";
import { deleteItemController } from "../useCases/deleteItem";
import { editItemController } from "../useCases/editItem";
import { getItemController } from "../useCases/getItem";

const itemsRouter = Router();

itemsRouter.get("/", async (req, res) => {
  const tempList = await ItemModel.find();

  res.status(200).json(tempList);
});

itemsRouter.post("/", (req, res) => createItemController.execute(req, res));
itemsRouter.patch("/", (req, res) => editItemController.execute(req, res));
itemsRouter.get("/:id", (req, res) => getItemController.execute(req, res));
itemsRouter.delete("/:id", (req, res) => deleteItemController.execute(req, res));

export { itemsRouter };
