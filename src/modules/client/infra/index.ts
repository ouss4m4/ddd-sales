import { Router } from "express";
import { ClientModel } from "../../../shared/infra/database/models/client.model";
import { getClientDetailsController } from "../useCases";
import { createClientController } from "../useCases/createClient";
import { deleteClientController } from "../useCases/deleteClient";

const clientsRouter = Router();

clientsRouter.get("/", async (req, res) => {
  let result = await ClientModel.find();
  res.send(result);
});

clientsRouter.get("/:code", (req, res) => {
  getClientDetailsController.execute(req, res);
});
clientsRouter.delete("/:id", (req, res) => {
  deleteClientController.execute(req, res);
});
clientsRouter.post("/", (req, res) => {
  createClientController.execute(req, res);
});

export { clientsRouter };
