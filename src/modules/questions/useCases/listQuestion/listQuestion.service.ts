import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import ListAnswersUseCase from "src/modules/answers/useCase/listAnswers/listAnswersUseCase";

@Injectable()
export default class ListQuestionService {
  constructor(private readonly listQuestionUseCase: ListAnswersUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const allQuestions = await this.listQuestionUseCase.execute();
      return res.status(200).json(allQuestions);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return res.status(500).json(errorMessage);
    }
  }
}
