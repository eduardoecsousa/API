import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import UserResponse from "../../infra/entities/userResponse.entity";
import { Repository } from "typeorm";
import IRegisterUserResponse from "../../dtos/IRegisterUserResponse";

@Injectable()
export default class RegisterUserResponseUseCase {
  constructor(
    @InjectRepository(UserResponse)
    private readonly userResponseRepository: Repository<UserResponse>,
  ) {}

  execute(data: Partial<IRegisterUserResponse>): Promise<UserResponse> {
    if (!data.answer) {
      throw new Error("Campo 'answer' é obrigatório");
    }
    const userResponse = this.userResponseRepository.create({
      user: { id: data.user },
      answer: data.answer,
    });

    return this.userResponseRepository.save(userResponse);
  }
}
