import { inject, injectable } from "tsyringe";

import { User } from "../modules/users/entities/User";
import { IUsersRepository } from "../modules/users/repositories/IUsersRepository";

@injectable()
class UserService {
  constructor(
    @inject("UsersRepository")
    private  usersRepository: IUsersRepository
  ){}

  async ListUsers(): Promise<User[]> {
    console.log( "consegui configurar o service'!" );
    const users = await this.usersRepository.findAllUsersOrderedByFirstName();
    return users;
  }
}

export { UserService };