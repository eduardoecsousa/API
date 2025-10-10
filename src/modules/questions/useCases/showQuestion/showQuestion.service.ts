import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import ShowAnswereUseCase from "src/modules/answers/useCase/showAnswers/showAnswersUseCase";

@Injectable()
export default class ShowQuestionService {
  constructor(private readonly showQuestionUseCase: ShowAnswereUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const question = await this.showQuestionUseCase.execute(id);
      return res.status(200).json(question);
    } catch (error: unknown) {
      const errorMenssage =
        error instanceof Error ? error.message : "Erro unknown";
      return res.status(400).json(errorMenssage);
    }
  }
}
