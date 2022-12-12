import "reflect-metadata";
import { Response, Request } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/UserService";

class UserController {  
  async ListUsers(request: Request, response: Response): Promise<Response> {
    const userService = container.resolve(UserService);            
    const all = await userService.ListUsers();
    return response.json(all);
  }

  async GetUserByFullName(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name } = request.body;
    const userService = container.resolve(UserService);
    const user = await userService.GetUserByFullName({first_name, last_name});    
    return response.json(user);
  }

  async FindUserWithGames(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;
    const userService = container.resolve(UserService);
    const user = await userService.findUserWithGamesById({user_id});    
    return response.json(user);
  }
}

export { UserController };