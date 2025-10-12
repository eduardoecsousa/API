import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Answers } from "../../infra/Entities/answers.entity";
import { Repository } from "typeorm";

@Injectable()
export default class ListAnswersUseCase {
  constructor(
    @InjectRepository(Answers)
    private readonly answersRepository: Repository<Answers>,
  ) {}

  execute(): Promise<Answers[]> {
    return this.answersRepository.find({
      relations: ["question"],
    });
  }
}
