import express, { json, NextFunction, Request, Response, urlencoded } from "express";
import { connectdb } from "../database";

import { v1Router } from "./api/v1";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH,DELETE");
  next();
});

app.use("/api/v1", v1Router);
app.get("/", (_, res) => res.redirect("/api/v1"));
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`);
});

connectdb();
