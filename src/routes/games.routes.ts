import { Router } from "express";

const gamesRouters = Router();

gamesRouters.get("/", (request, response) => {
  return response.send({ message: "consegui a rota dos games!" })
});

export { gamesRouters };