import express from "express";
import { Environmentals } from "../model/environmentals.js";
import * as environmentalsController from  "../controllers/environmentalsController.js";

const EnvironmentalsRouter = express.Router();

/**
 * getAllEnvironmentals method
 * @return {Array} found
 */
EnvironmentalsRouter.get("/getAllEnvironmentals", environmentalsController.getAllEnvironmentals);

EnvironmentalsRouter.get("/getEnvironmentalsImgUrl/:id", environmentalsController.getEnvironmentalsImgUrl);

/**
 * addEnvironmentals method
 * @param {String} environmentalName
 * @param {String} element
 * @param {String} rarity
 * @param {String} experience
 * @param {String} ownerId
 * @param {String} imageUrl
 * @return {String} result
 */

EnvironmentalsRouter.post("/addEnvironmentals", environmentalsController.addEnvironmentals);

EnvironmentalsRouter.post("/addEnvironmentalsXP", environmentalsController.addEnvironmentalsXP);


//test Method
EnvironmentalsRouter.get("/test", (req, res) => {
  res.send("test");
});

export { EnvironmentalsRouter };
