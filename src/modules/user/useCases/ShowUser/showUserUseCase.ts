import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../infra/typeorm/entities/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class ShowUserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(idUser: string): Promise<User | null> {
    const userBeforeUpdate = await this.userRepository.findOne({
      where: { id: idUser },
    });
    if (!userBeforeUpdate) {
      throw new Error("User not found");
    }
    return userBeforeUpdate;
  }
}
