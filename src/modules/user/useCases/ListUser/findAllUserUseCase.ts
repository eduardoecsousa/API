import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../infra/typeorm/entities/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class FindAllUserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  execute(): Promise<User[]> {
    return this.userRepository.find();
  }
}
