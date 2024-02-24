import express from "express";
import { User } from "../model/userModel.js";

const createUser = async (req, res) => {
    const newUser = new User({
        userId: req.body.userId,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        totalEnvironmentalsLevel: req.body.totalEnvironmentalsLevel,
    });
    
    try {
        const result = await newUser.save();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
};


const changeProfilePicture = async (req, res) => {
    const userId = req.body.userId;
    const newProfilePictureUrl = req.body.newProfilePicture;
    try {
        const result = await User.updateOne({ userId: userId }, { profilePictureUrl: newProfilePictureUrl });
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
}

export { createUser };
