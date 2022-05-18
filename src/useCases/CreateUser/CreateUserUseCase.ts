import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({ email, name, password }: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User({ name, email, password });

    await this.usersRepository.save(user);
  }
}
