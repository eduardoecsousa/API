import { InjectRepository } from "@nestjs/typeorm";
import UserResponse from "../../infra/entities/userResponse.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class ListUserResponseUseCase {
  constructor(
    @InjectRepository(UserResponse)
    private userResponseRepository: Repository<UserResponse>,
  ) {}

  async execute() {
    return this.userResponseRepository.find({
      relations: ["user"],
    });
  }
}
