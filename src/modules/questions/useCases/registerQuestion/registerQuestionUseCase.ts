import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Questions } from "../../infra/typeorm/entities/questions.entity";
import { Repository } from "typeorm";
import IQuestionRegister from "../../dtos/IQuestionRegister";

@Injectable()
export default class RegisterQuestionUseCase {
  constructor(
    @InjectRepository(Questions)
    private readonly questionRepository: Repository<Questions>,
  ) {}
  async execute(data: IQuestionRegister) {
    const newQuestion = await this.questionRepository.save(data);
    return newQuestion;
  }
}
