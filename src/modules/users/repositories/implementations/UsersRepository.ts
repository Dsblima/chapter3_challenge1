import "reflect-metadata";
import { getRepository, Repository } from 'typeorm';

import { User } from '../../entities/User';
import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    // Complete usando ORM

    return new User();
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    // return this.repository.query(); // Complete usando raw query
    console.log( "consegui configurar o repositorio'!" );
    return [];
  }
  
  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    // return this.repository.query(); // Complete usando raw query
    return [];
  }
}
