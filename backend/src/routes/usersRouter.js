import express from "express";
import * as usersController from  "../controllers/usersController.js";

const UsersRouter = express.Router();


UsersRouter.get("/getAllUsers", usersController.getAllUsers);

UsersRouter.post("/addUsers", usersController.createUser);

UsersRouter.post("/userChangeAvatar", usersController.changeProfilePicture);

UsersRouter.post("/updateEnvironmentalsCollections", usersController.updateEnvironmentalsCollections);

UsersRouter.get("/:id/EnvironmentalsCollections", usersController.getEnvironmentalsCollections);

//test Method
UsersRouter.get("/test", (req, res) => {
  res.send("test");
});

export { UsersRouter };
