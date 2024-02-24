import express from "express";
import { User } from "../model/user.js";

const UsersRouter = express.Router();

/**
 * getAllUsers method
 * @return {Array} found
 */
UsersRouter.get("/getAllUsers", (req, res) => {
  User.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

/**
 * addUsers method
 * @param {String} userName
 * @param {String} userEmail
 * @return {String} result
 */

UsersRouter.post("/addUsers", (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    userEmail: req.body.element,
  });

  newUser
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

UsersRouter.post("/userChangeAvatar", (req, res) => {
  try {
    const result = User.updateOne(
      { userId: req.body.userId},
      { profilePictureUrl: req.body.newProfilePicture }
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});


UsersRouter.post("/updateElementalsCollections", (req, res) => {
  try {
    const result = User.update(
      { userId: req.body.userId ,
      "collections.environmentalDefaultId" : req.body.environmentalDefaultId }, // Double check the filter for environmentalId if correct
      { $inc: { "collections.$.count": 1 } } // Double check if this updates correctly
    );
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});


//test Method
UsersRouter.get("/test", (req, res) => {
  res.send("test");
});

export { UsersRouter };
