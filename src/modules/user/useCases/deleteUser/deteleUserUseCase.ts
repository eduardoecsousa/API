import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../infra/typeorm/entities/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
