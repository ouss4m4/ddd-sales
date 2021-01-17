import { Router } from "express";
import { getClientDetailsController } from "../useCases";

const clientsRouter = Router();

clientsRouter.get("/", (req, res) => {
  res.status(200).send({ clients: "router working" });
});

clientsRouter.get("/:ClientCode", (req, res) => {
  getClientDetailsController.execute(req, res);
});

export { clientsRouter };
