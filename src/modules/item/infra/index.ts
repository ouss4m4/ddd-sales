import { Router } from "express";
import { createItemController } from "../useCases/createItem";
import { deleteItemController } from "../useCases/deleteItem";
import { editItemController } from "../useCases/editItem";
import { getItemController } from "../useCases/getItem";
import { getItemsListController } from "../useCases/getItemsList";

const itemsRouter = Router();

itemsRouter.post("/", (req, res) => createItemController.execute(req, res));
itemsRouter.patch("/", (req, res) => editItemController.execute(req, res));
itemsRouter.get("/:id", (req, res) => getItemController.execute(req, res));
itemsRouter.delete("/:id", (req, res) => deleteItemController.execute(req, res));
itemsRouter.get("/", (req, res) => getItemsListController.execute(req, res));

export { itemsRouter };
