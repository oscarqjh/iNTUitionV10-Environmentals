import express from "express";
import { Locations } from "../model/locations.js";

const getAllLocations = (req, res) => {
    Locations.find()
      .then((found) => {
        res.send(found);
        return found;
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
  };

const addLocations = (req, res) => {
    const newLocation = new Locations({
      locationName: req.body.locationName,
      address: req.body.address,
    });
    
    try {
        newLocation
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
}


export {
    getAllLocations,
    addLocations,
}