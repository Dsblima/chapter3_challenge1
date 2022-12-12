import { inject, injectable } from "tsyringe";
import { IFindUserByFullNameDTO, IFindUserWithGamesDTO } from "../modules/users/dtos";

import { User } from "../modules/users/entities/User";
import { IUsersRepository } from "../modules/users/repositories/IUsersRepository";

@injectable()
class UserService {
  constructor(
    @inject("UsersRepository")
    private  usersRepository: IUsersRepository
  ){}

  async ListUsers(): Promise<User[]> {    
    const users = await this.usersRepository.findAllUsersOrderedByFirstName();
    return users;
  }

  async GetUserByFullName({ first_name, last_name }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    const users = await this.usersRepository.findUserByFullName({ first_name, last_name });    
    return users;
  }

  async findUserWithGamesById({user_id}: IFindUserWithGamesDTO): Promise<User> {
    const user = await this.usersRepository.findUserWithGamesById({user_id})
    return user;
  }
}

export { UserService };