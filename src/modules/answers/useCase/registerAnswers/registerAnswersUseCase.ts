import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Answers } from "../../infra/Entities/answers.entity";
import { Repository } from "typeorm";
import IAnswersRegister from "../../dtos/IAnswersRegister";

@Injectable()
export class RegisterAnswersUseCase {
  constructor(
    @InjectRepository(Answers)
    private readonly answersRepository: Repository<Answers>,
  ) {}
  execute(data: Partial<IAnswersRegister>): Promise<Answers> {
    const answer = this.answersRepository.create(data);
    return this.answersRepository.save(answer);
  }
}
