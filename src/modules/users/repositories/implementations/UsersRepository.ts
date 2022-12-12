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
    const user = await this.repository.findOne({
      where: {
        id: user_id,      
      },
     relations: ['games']
    });
    
    if (!user)
      return new User();

    return user;
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return await this.repository.query(`Select * FROM "users" ORDER BY first_name`); // Complete usando raw query    
  }
  
  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.repository.query(`Select * FROM "users" WHERE LOWER(first_name) = LOWER('${first_name}') and LOWER(last_name) = LOWER('${last_name}')`); // Complete usando raw query    
  }
}
