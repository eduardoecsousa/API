import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import UpdateQuestionUseCase from "./updateQuestionUseCase";
import IQuestionRegister from "../../dtos/IQuestionRegister";

@Injectable()
export default class UpdateQuestionService {
  constructor(private readonly updateQuestionUseCase: UpdateQuestionUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body as IQuestionRegister;
    try {
      const question = await this.updateQuestionUseCase.execute(id, data);
      return res.status(200).json(question);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Error unknown";
      return res.status(400).json(errorMessage);
    }
  }
}
