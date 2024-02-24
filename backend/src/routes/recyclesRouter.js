import express from "express";
import { RecyclesLog } from "../model/recyclesLog.js";

const RecyclesRouter = express.Router();

RecyclesRouter.post("/addRecycleLog", (req, res) => {


  const newRecycleLog = new Recycles({
    userId: req.body.userId,
    environmentalId: req.body.environmentalId,
    locationId: req.body.locationId,
    recycleCompany: req.body.recycleCompany,
    recycleType: req.body.recycleType,
    recycleAmount: req.body.recycleAmount,
    experienceEarned: req.body.experienceEarned,
  });
  

  newRecycleLog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});



/**
 * addRecycles method
 * @param {String} userName
 * @param {String} userEmail
 * @return {String} result
 */

RecyclesRouter.post("/addRecycles", (req, res) => {
  const newRecycles = new Recycles({
    userName: req.body.userName,
    userEmail: req.body.element,
  });

  newRecycles
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

RecyclesRouter.post("/userChangeAvatar", (req, res) => {
  try {
    const result = Recycles.updateOne(
      { userId: req.body.userId},
      { profilePictureUrl: req.body.newProfilePicture }
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});


RecyclesRouter.post("/updateElementalsCollections", (req, res) => {
  try {
    const result = Recycles.update(
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
RecyclesRouter.get("/test", (req, res) => {
  res.send("test");
});

export { RecyclesRouter };
