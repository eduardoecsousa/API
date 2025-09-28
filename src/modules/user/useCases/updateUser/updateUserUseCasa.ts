import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../infra/typeorm/entities/User.entity";
import { Repository } from "typeorm";
import { IUserRegister } from "../../dtos/IUserRegister";

@Injectable()
export class updateUserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(idUser: string, data: Partial<IUserRegister>): Promise<User> {
    const userBeforeUpdate = await this.userRepository.findOne({
      where: { id: idUser },
    });
    if (!userBeforeUpdate) {
      throw new Error("User not found");
    }
    await this.userRepository.update(idUser, data);
    const updatedUser = await this.userRepository.findOne({
      where: { id: idUser },
    });
    if (!updatedUser) {
      throw new Error("User not found after update");
    }
    return updatedUser;
  }
}
