import express from "express";
import * as recyclesOtpController from "../controllers/recyclesOtpController.js";

const RecycleOtpRouter = express.Router();

RecycleOtpRouter.post(
  "/generateRecycleOtp",
  recyclesOtpController.generateRecycleOtp
);

RecycleOtpRouter.post(
  "/verifyRecycleOtp",
  recyclesOtpController.verifyRecycleOtp
);

//test Method
RecycleOtpRouter.get("/test", (req, res) => {
  res.send("test");
});

export { RecycleOtpRouter };
