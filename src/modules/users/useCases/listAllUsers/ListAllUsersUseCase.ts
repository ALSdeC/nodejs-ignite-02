import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdmin = this.usersRepository.findById(user_id);
    if(userAdmin) {
      if(userAdmin.admin) {
        return this.usersRepository.list();
      }
      else {
        throw new Error("The user isn't an admin!");
      }
    }
    else {
      throw new Error("The user doesn't exists!");
    }
  }
}

export { ListAllUsersUseCase };
