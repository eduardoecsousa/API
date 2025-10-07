import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Answers } from "../../infra/Entities/answers.entity";
import { Repository } from "typeorm";
import IAnswersRegister from "../../dtos/IAnswersRegister";

@Injectable()
export default class UpdateAnswereUseCase {
  constructor(
    @InjectRepository(Answers)
    private readonly answereRepository: Repository<Answers>,
  ) {}
  async execute(
    idUser: string,
    data: Partial<IAnswersRegister>,
  ): Promise<Answers | null> {
    const beforeAnswer = await this.answereRepository.findOne({
      where: { id: idUser },
    });
    if (!beforeAnswer) {
      throw new Error("Answere not found");
    }
    await this.answereRepository.update(idUser, data);
    const updateAwswere = await this.answereRepository.findOne({
      where: { id: idUser },
    });
    return updateAwswere;
  }
}
