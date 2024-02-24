import express from "express";
import { User } from "../model/user.js";

const createUser = async (req, res) => {
    const newUser = new User({
      userName: req.body.userName,
      userEmail: req.body.email,
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


const changeEquippedEnvironmental = async (req, res) => {
    try {
        const result = User.updateOne(
        { userId: req.body.userId},
        { equippedEnvironmental: req.body.newEnvironmentalId }
        );
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
};

const updateEnvironmentalsCollections = (req, res) => {
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

const getEnvironmentalsCollections = (req, res) => {
  try {
    User.findById({ _id: req.params.id })
      .then((found) => {
        res.send(found.collections);
        return found.collections;
    })
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

const getUserByEmail = (req, res) => {
  User.findOne({ userEmail: req.params.email })
      .then((found) => {
      res.send(found);
      })
      .catch((err) => {
      console.log(err);
      res.send(err.message);
      });
};

/**
Not done yet
const getTotalBottles = (req, res) => {
  User.find()
      .then((found) => {
      res.send(found);
      })
      .catch((err) => {
      console.log(err);
      res.send(err.message);
      });
};

const getTotalLevels = (req, res) => {
  User.find()
      .then((found) => {
      res.send(found);
      })
      .catch((err) => {
      console.log(err);
      res.send(err.message);
      });
};
**/

 export {
    createUser,
    changeEquippedEnvironmental,
    updateEnvironmentalsCollections,
    getEnvironmentalsCollections,
    getAllUsers,
    getUserByEmail,
    // getTotalBottles,
    // getTotalLevels,
};



