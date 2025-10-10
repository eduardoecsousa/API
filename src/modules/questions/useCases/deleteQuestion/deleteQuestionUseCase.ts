import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Questions } from "../../infra/typeorm/entities/questions.entity";
import { Repository } from "typeorm";

@Injectable()
export default class DeleteQuestionUseCase {
  constructor(
    @InjectRepository(Questions)
    private readonly questionRepository: Repository<Questions>,
  ) {}

  async execute(idQuestion: string) {
    const question = await this.questionRepository.findOne({
      where: { id: idQuestion },
    });
    if (!question) {
      return new Error("Question not Found!");
    }

    return this.questionRepository.delete(idQuestion);
  }
}
