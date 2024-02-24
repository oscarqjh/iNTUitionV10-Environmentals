import express from "express";
import { Environmentals } from "../model/environmentals.js";

const addEnvironmentals =  (req, res) => {
    const newEnvironmentals = new Environmentals({
      environmentalName: req.body.environmentalsName,
      element: req.body.element,
      rarity: req.body.rarity,
      // level: req.body.level,
      experience: req.body.experience,
      ownerId: req.body.ownerId,
      imageUrl: req.body.imageUrl,
    });
  
    newEnvironmentals
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  };


const getEnvironmentalsImgUrl = (req, res) => {
    Environmentals.find({ _id: req.params.id})
      .then((found) => {
        res.send(found);
        return found.imageUrl // Need to check if this actually returns imageUrl
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
    };

const getAllEnvironmentals = (req, res) => {
    Environmentals.find()
      .then((found) => {
        res.send(found);
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
};

const addEnvironmentalsXP = (req, res) => {
    const environmentalId = req.body.environmentalId;
    const experienceEarned = req.body.experienceEarned;
    try {
      // const result = await Environmentals.update({ _id : environmentalId},{ $inc: { experience: experienceEarned } });
      
      Environmentals.update(
        { _id : environmentalId},
        { $inc: { experience: experienceEarned } }
      );
      res.send(result);
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };

export {
    addEnvironmentals,
    getEnvironmentalsImgUrl,
    getAllEnvironmentals,
    addEnvironmentalsXP,
}