import express from "express";
import { RecycleOtp } from "../model/recycleOtp.js";

const RecycleOtpRouter = express.Router();



RecycleOtpRouter.post("/generateRecycleOtp", (req, res) => {
  const randomOtp = Math.floor(100000 + Math.random() * 900000);

  const newRecycleOtp = new RecycleOtp({
    recycleOtp: randomOtp,
    locationId: req.body.locationId,
    recycleCompany: req.body.recycleCompany,
    recycleType: req.body.recycleType,
    recycleAmount: req.body.recycleAmount,
    experienceEarned: req.body.experienceEarned,
  });
  

  newRecycleOtp
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

RecycleOtpRouter.post("/generateRecycleOtp", (req, res) => {
  const randomOtp = Math.floor(100000 + Math.random() * 900000);

  const newRecycleOtp = new RecycleOtp({
    recycleOtp: randomOtp,
    locationId: req.body.locationId,
    recycleCompany: req.body.recycleCompany,
    recycleType: req.body.recycleType,
    recycleAmount: req.body.recycleAmount,
    experienceEarned: req.body.experienceEarned,
  });
  

  newRecycleOtp
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

RecycleOtpRouter.post("/verifyRecycleOtp", (req, res) => {
  try {
    const result = RecycleOtp.findOne({ recycleOtp: req.body.recycleOtp });
    if (result !== null) {
      res.send(result);
      const recycleLog = {
        userId: result.userId,
        environmentalId: result.environmentalId,
        locationId: result.locationId,
        recycleCompany: result.recycleCompany,
        recycleType: result.recycleType,
        recycleAmount: result.recycleAmount,
        experienceEarned: result.experienceEarned,
      };
      RecyclesRouter.post("/addRecycleLog", recycleLog);
    }
    res.send(result);
  } catch (err) {
    console.log
  }
});

/**
 * addRecycleOtp method
 * @param {String} userName
 * @param {String} userEmail
 * @return {String} result
 */

RecycleOtpRouter.post("/addRecycleOtp", (req, res) => {
  const newRecycleOtp = new RecycleOtp({
    userName: req.body.userName,
    userEmail: req.body.element,
  });

  newRecycleOtp
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

RecycleOtpRouter.post("/userChangeAvatar", (req, res) => {
  try {
    const result = RecycleOtp.updateOne(
      { userId: req.body.userId},
      { profilePictureUrl: req.body.newProfilePicture }
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});


RecycleOtpRouter.post("/updateElementalsCollections", (req, res) => {
  try {
    const result = RecycleOtp.update(
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
RecycleOtpRouter.get("/test", (req, res) => {
  res.send("test");
});

export { RecycleOtpRouter };
