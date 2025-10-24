import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import UserResponse from "../../infra/entities/userResponse.entity";
import { Repository } from "typeorm";

@Injectable()
export default class DeleteUserResponseUseCase {
  constructor(
    @InjectRepository(UserResponse)
    private userResponseRepository: Repository<UserResponse>,
  ) {}
  async execute(id: string) {
    const userResponse = await this.userResponseRepository.findOne({
      where: { id },
    });
    if (!userResponse) {
      throw new Error("UserResponse not found");
    }
    await this.userResponseRepository.remove(userResponse);
    return { message: `DeleteUserResponseUseCase executed for id: ${id}` };
  }
}
