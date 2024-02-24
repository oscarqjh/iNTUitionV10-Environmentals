import express from "express";
import { RecyclesLog } from "../model/recyclesLog.js";
import { addEnvironmentalsXP } from "./environmentalsController.js"


const addRecycleLog = (req, res) => {

    const newRecycleLog = new RecyclesLog({
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
        // If save successful update experience of Environmentals
        addEnvironmentalsXP(req.body.environmentalId, req.body.experienceEarned);
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
};



export {
    addRecycleLog,

}