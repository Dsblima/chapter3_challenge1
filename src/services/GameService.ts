import { inject, injectable } from "tsyringe";

import { Game } from "../modules/games/entities/Game";
import { IGamesRepository } from "../modules/games/repositories/IGamesRepository";
import { User } from "../modules/users/entities/User";

@injectable()
export class GameService {
  constructor(
    @inject("GamesRepository")
    private  gamesRepository: IGamesRepository
  ){}

  async FindByTitleContaining(title: string): Promise<Game[]> {
    const games = await this.gamesRepository.findByTitleContaining(title);
    return games
  }

  async CountAllGames(): Promise<[{ count: string }]> {
    const count = await this.gamesRepository.countAllGames();
    
    return count;
  }

  async FindUsersByGameId(id: string): Promise<User[]> {
    const users = await this.gamesRepository.findUsersByGameId(id);    
    return users;
  }
}