import { Router } from "express";

const itemsRouter = Router();

itemsRouter.get("/", (req, res) => {
  res.status(200).send({ Items: "router working" });
});

export { itemsRouter };
