import "reflect-metadata";
import { Response, Request } from "express";
import { container } from "tsyringe";
import { GameService } from "../services/GameService";

export class GameController {
  async findByTitleContaining(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;
    const gameService = container.resolve(GameService);
    const games = await gameService.FindByTitleContaining(title);
    return response.status(201).json(games);
  }

  async countAllGames(request: Request, response: Response): Promise<Response> {
    const gameService = container.resolve(GameService);
    const count = await gameService.CountAllGames();    
    return response.json(count);
  }

  async findUsersByGameId(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const gameService = container.resolve(GameService);
    const users = await gameService.FindUsersByGameId(id);
    return response.json(users);
  }
}