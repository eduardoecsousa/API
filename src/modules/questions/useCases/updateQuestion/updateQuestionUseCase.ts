import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Questions } from "../../infra/typeorm/entities/questions.entity";
import { Repository } from "typeorm";
import IQuestionRegister from "../../dtos/IQuestionRegister";

@Injectable()
export default class UpdateQuestionUseCase {
  constructor(
    @InjectRepository(Questions)
    private readonly questionRepositoty: Repository<Questions>,
  ) {}
  async execute(idQuestion: string, data: IQuestionRegister) {
    const beforeQuestion = await this.questionRepositoty.findOne({
      where: { id: idQuestion },
    });
    if (!beforeQuestion) {
      return new Error("Question not found");
    }
    const afterQuestion = await this.questionRepositoty.update(
      idQuestion,
      data,
    );

    return afterQuestion;
  }
}
