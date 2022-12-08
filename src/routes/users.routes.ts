import { Router } from "express";
import { UserController } from "../controllers/UserController";

const usersRouters = Router();

const userController = new UserController();

usersRouters.get("/", userController.ListUsers);

export { usersRouters };