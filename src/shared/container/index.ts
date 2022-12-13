import { container } from "tsyringe";

import { GamesRepository } from "../../modules/games/repositories/implementations/GamesRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";

import { IGamesRepository } from "../../modules/games/repositories/IGamesRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>( "UsersRepository", UsersRepository );

container.registerSingleton<IGamesRepository>( "GamesRepository", GamesRepository );