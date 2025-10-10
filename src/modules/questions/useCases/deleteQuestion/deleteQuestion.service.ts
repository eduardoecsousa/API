import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import DeleteQuestionUseCase from "./deleteQuestionUseCase";

@Injectable()
export default class DeleteQuestionService {
  constructor(private readonly deleteQuestionUseCase: DeleteQuestionUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await this.deleteQuestionUseCase.execute(id);
      return res.status(200).send;
    } catch (error: unknown) {
      const errorMenssage =
        error instanceof Error ? error.message : "Erro unknown";
      return res.status(400).json(errorMenssage);
    }
  }
}
