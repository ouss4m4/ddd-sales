import { Router } from "express";

const clientsRouter = Router();

clientsRouter.get("/", (req, res) => {
  res.status(200).send({ clients: "router working" });
});

export { clientsRouter };
