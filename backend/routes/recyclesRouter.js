import express from "express";
import { RecyclesLog } from "../model/recyclesLog.js";
import * as recyclesController from "../controllers/recyclesController.js";

const RecyclesRouter = express.Router();

RecyclesRouter.post("/addRecycleLog", recyclesController.addRecycleLog);

//test Method
RecyclesRouter.get("/test", (req, res) => {
  res.send("test");
});

export { RecyclesRouter };
