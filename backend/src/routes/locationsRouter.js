import express from "express";
import { Locations } from "../model/locations.js";

const LocationsRouter = express.Router();

/**
 * getAllLocations method
 * @return {Array} found
 */
LocationsRouter.get("/getAllLocations", (req, res) => {
  Locations.find()
    .then((found) => {
      res.send(found);
      return found;
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});


//test Method
LocationsRouter.get("/test", (req, res) => {
  res.send("test");
});

export { LocationsRouter };
