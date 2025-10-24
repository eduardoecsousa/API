import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import UserResponse from "../../infra/entities/userResponse.entity";
import { Repository } from "typeorm";

@Injectable()
export default class ShowUserResponseUseCase {
  constructor(
    @InjectRepository(UserResponse)
    private userResponseRepository: Repository<UserResponse>,
  ) {}
  async execute(id: string) {
    const userResponse = await this.userResponseRepository.findOne({
      where: { id },
      relations: ["user"],
    });

    if (!userResponse) {
      throw new Error("UserResponse not found");
    }
    return userResponse;
  }
}
