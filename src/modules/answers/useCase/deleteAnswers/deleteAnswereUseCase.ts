import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Answers } from "../../infra/Entities/answers.entity";
import { Repository } from "typeorm";

@Injectable()
export default class DeleteAnswereUseCase {
  constructor(
    @InjectRepository(Answers)
    private readonly answereRepository: Repository<Answers>,
  ) {}

  async execute(idUser: string): Promise<void> {
    const answer = await this.answereRepository.findOne({
      where: { id: idUser },
    });
    if (!answer) {
      throw new Error("Answer not found");
    }
    await this.answereRepository.delete(idUser);
  }
}
