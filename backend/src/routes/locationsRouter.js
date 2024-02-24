import express from "express";
import * as locationsController from "../controllers/locationsController.js";

const LocationsRouter = express.Router();

/**
 * getAllLocations method
 * @return {Array} found
 */
LocationsRouter.get("/getAllLocations", locationsController.getAllLocations);

LocationsRouter.post("/addLocations", locationsController.addLocations);

//test Method
LocationsRouter.get("/test", (req, res) => {
  res.send("test");
});

export { LocationsRouter };
