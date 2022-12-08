import { Router } from "express";
import { gamesRouters } from "./games.routes";
import { usersRouters } from "./users.routes";

const router = Router();

router.use("/users", usersRouters);
router.use("/games", gamesRouters);

export { router };