import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Answers } from "../../infra/Entities/answers.entity";
import { Repository } from "typeorm";

@Injectable()
export default class ShowAnswereUseCase {
  constructor(
    @InjectRepository(Answers)
    private answereRepository: Repository<Answers>,
  ) {}

  async execute(idUser: string): Promise<Answers | null> {
    const answer = await this.answereRepository.findOne({
      where: { id: idUser },
    });

    if (!answer) {
      throw new Error("Answere Not Found");
    }

    return answer;
  }
}
