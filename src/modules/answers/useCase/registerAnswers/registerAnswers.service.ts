import { Injectable } from "@nestjs/common";
import { RegisterAnswersUseCase } from "./registerAnswersUseCase";
import { Request, Response } from "express";
import IAnswersRegister from "../../dtos/IAnswersRegister";

@Injectable()
export default class RegisterAnswersService {
  constructor(
    private readonly registerAnswersUseCase: RegisterAnswersUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<any> {
    const { question_id, answer } = request.body as IAnswersRegister;
    try {
      const answerCreated = await this.registerAnswersUseCase.execute({
        question_id,
        answer,
      });
      return response.status(201).json(answerCreated);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return response.status(400).json({ error: errorMessage });
    }
  }
}
