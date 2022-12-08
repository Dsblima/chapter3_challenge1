import "reflect-metadata";
import { Response, Request } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/UserService";

class UserController {  
  async ListUsers(request: Request, response: Response): Promise<Response> {    
    const userService = container.resolve(UserService);            
    const all = await userService.ListUsers();
    return response.send({ message: "consegui configurar o controller e o service'!" });
    //return response.status(201).send();
  }
}

export { UserController };