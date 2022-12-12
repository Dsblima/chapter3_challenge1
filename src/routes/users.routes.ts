import { Router } from "express";
import { UserController } from "../controllers/UserController";

const usersRouters = Router();

const userController = new UserController();

usersRouters.get("/", userController.ListUsers);
usersRouters.get("/userbyfullname", userController.GetUserByFullName);
usersRouters.get("/finduserwithgamesbyid", userController.FindUserWithGames);

export { usersRouters };