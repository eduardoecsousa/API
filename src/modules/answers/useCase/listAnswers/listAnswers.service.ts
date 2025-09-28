import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import ListAnswersUseCase from "./listAnswersUseCase";
import { Answers } from "../../infra/Entities/answers.entity";

@Injectable()
export default class ListAnswersService {
  constructor(private readonly listAnswersUseCase: ListAnswersUseCase) {}

  async handle(request: Request, response: Response): Promise<any> {
    try {
      const allAnswers: Answers[] = await this.listAnswersUseCase.execute();
      return response.status(200).json(allAnswers);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return response.status(400).json({ error: errorMessage });
    }
  }
}
