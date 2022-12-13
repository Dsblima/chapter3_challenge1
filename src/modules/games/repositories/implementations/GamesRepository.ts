import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    const games = await this.repository
      .createQueryBuilder("game")
      .where(`LOWER(game.title) ILIKE LOWER('%${param}%')`)
      .getMany();
    return games;      
  }

  async countAllGames(): Promise<[{ count: string }]> {
    const gamesCount = await this.repository.query(`Select COUNT(*) FROM "games"`); // Complete usando raw query    
    return gamesCount;
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    let users: User[] = []
    const select = await this.repository
      .createQueryBuilder("game")
      .innerJoinAndSelect("users_games_games","usergames",`usergames.gamesId='${id}'`)
      .innerJoinAndSelect("users","user","usergames.usersId = user.id")
      .where("game.id = usergames.gamesId")
      .getRawAndEntities()
      
      select.raw.forEach(queryResult => {
        const user = new User();
        user.id = queryResult.user_id
        user.first_name = queryResult.user_first_name
        user.last_name = queryResult.user_last_name
        user.email = queryResult.user_email
        user.created_at = queryResult.user_created_at
        user.updated_at = queryResult.user_updated_at

        users.push(user);
      });

    return users;
  }
}
