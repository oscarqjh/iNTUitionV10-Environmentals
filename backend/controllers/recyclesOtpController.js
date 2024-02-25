import express from "express";
import { RecycleOtp } from "../model/recycleOtp.js";
import { addRecycleLog } from "./recyclesController.js";

const generateRecycleOtp = (req, res) => {
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
};

const verifyRecycleOtp = (req, res) => {
  try {
    RecycleOtp.findOneAndDelete({ recycleOtp: req.body.recycleOtp })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  } catch (err) {
    console.log(err);
  }
};

// const deleteRecycleOtp = (req, res) => {
//   try {
//     RecycleOtp.deleteOne({ recycleOtp: req.body.recycleOtp });
//     res.send("Recycle Otp Deleted");
//   } catch (err) {
//     console.log(err);
//     res.send(err.message);
//   }
// };

export {
  generateRecycleOtp,
  verifyRecycleOtp,
  // deleteRecycleOtp,
};
