import express from "express";
import * as usersController from "../controllers/usersController.js";

const UsersRouter = express.Router();

UsersRouter.get("/test", (req, res) => {
  res.send("test");
});

UsersRouter.get("/getAllUsers", usersController.getAllUsers);

UsersRouter.get("/getUserByEmail/:email", usersController.getUserByEmail);

UsersRouter.post("/addUsers", usersController.createUser);

UsersRouter.put("/updateUser", usersController.updateUser);

UsersRouter.post(
  "/userChangeEnvironmental",
  usersController.changeEquippedEnvironmental
);

UsersRouter.post(
  "/updateEnvironmentalsCollections",
  usersController.updateEnvironmentalsCollections
);

UsersRouter.get(
  "/:id/EnvironmentalsCollections",
  usersController.getEnvironmentalsCollections
);

// Deprecated
// UsersRouter.get("/getTotalBottles", usersController.getTotalBottles);
// UsersRouter.get("/getTotalLevels", usersController.getTotalLevels);

//test Method
UsersRouter.get("/test", (req, res) => {
  res.send("test");
});

export { UsersRouter };
