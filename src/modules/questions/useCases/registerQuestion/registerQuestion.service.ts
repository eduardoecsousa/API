import { Injectable } from "@nestjs/common";
import RegisterQuestionUseCase from "./registerQuestionUseCase";
import { Request, Response } from "express";
import IQuestionRegister from "../../dtos/IQuestionRegister";

@Injectable()
export default class RegisterQuestionService {
  constructor(
    private readonly registerQuestionUseCase: RegisterQuestionUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<any> {
    const question = req.body as IQuestionRegister;
    try {
      const newQuestion = await this.registerQuestionUseCase.execute(question);
      return res.status(201).json(newQuestion);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return res.status(400).json({ error: errorMessage });
    }
  }
}
