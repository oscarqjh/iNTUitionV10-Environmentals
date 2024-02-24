import express from "express";
import { Recycles } from "../model/recyclesLog.js.js";

const createUser = async (req, res) => {
    const newUser = new User({
      userName: req.body.userName,
      userEmail: req.body.element,
    });
    
    try {
        await newUser
            .save()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log(err);
                res.send(err.message);
            });
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
};


const changeProfilePicture = async (req, res) => {
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
};

const updateElementalsCollections = (req, res) => {
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
  };

const getAllUsers = (req, res) => {
    User.find()
        .then((found) => {
        res.send(found);
        })
        .catch((err) => {
        console.log(err);
        res.send(err.message);
        });
};
export {
    createUser,
    changeProfilePicture,
    getAllUsers,

}