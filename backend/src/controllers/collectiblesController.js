import express from "express";
import { Collectible } from "../model/collectiblesName.js.js";

const createCollectible = async (req, res) => {
    const newCollectible = new Collectible({
        collectibleName: req.body.collectibleName,
        element: req.body.element,
        rarity: req.body.rarity,
    });
    
    try {
        await newCollectible
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

 export {
    createCollectible,
};



