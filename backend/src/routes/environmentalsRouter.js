import express from "express";
import { Environmentals } from "../model/environmentals.js";

const EnvironmentalsRouter = express.Router();

/**
 * getAllEnvironmentals method
 * @return {Array} found
 */
EnvironmentalsRouter.get("/getAllEnvironmentals", (req, res) => {
  Environmentals.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

EnvironmentalsRouter.get("/getEnvironmentalsImgUrl/:id", (req, res) => {
  Environmentals.find({ _id: req.params.id})
    .then((found) => {
      res.send(found);
      return found.imageUrl // Need to check if this actually returns imageUrl
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
  });

/**
 * addEnvironmentals method
 * @param {String} environmentalName
 * @param {String} element
 * @param {String} rarity
 * @param {String} experience
 * @param {String} ownerId
 * @param {String} imageUrl
 * @return {String} result
 */

EnvironmentalsRouter.post("/addEnvironmentals", (req, res) => {
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
});

EnvironmentalsRouter.post("/addEnvironmentalsXP", (req, res) => {
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
});




//test Method
EnvironmentalsRouter.get("/test", (req, res) => {
  res.send("test");
});

export { EnvironmentalsRouter };
