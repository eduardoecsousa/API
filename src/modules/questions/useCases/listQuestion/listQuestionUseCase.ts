import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Questions } from "../../infra/typeorm/entities/questions.entity";
import { Repository } from "typeorm";

@Injectable()
export default class ListQuestionUseCase {
  constructor(
    @InjectRepository(Questions)
    private readonly questionRepositoty: Repository<Questions>,
  ) {}

  async execute() {
    return this.questionRepositoty.find();
  }
}
