import { Router } from "express";

import { GameController } from "../controllers/GameController";

const gamesRouters = Router();

const gameController = new GameController();

gamesRouters.get("/findByTitleContaining", gameController.findByTitleContaining);
gamesRouters.get("/countAllGames", gameController.countAllGames);
gamesRouters.get("/findUsersByGameId", gameController.findUsersByGameId);

export { gamesRouters };