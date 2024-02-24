import express from "express";
import * as collectiblesController from "../controllers/collectiblesController.js";


const CollectiblesRouter = express.Router();


CollectiblesRouter.post("/addNewCollectible", collectiblesController.createCollectibles);


export { CollectiblesRouter };