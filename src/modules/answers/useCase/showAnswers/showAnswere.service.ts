import { Injectable } from "@nestjs/common";
import ShowAnswereUseCase from "./showAnswersUseCase";
import { Request, Response } from "express";

@Injectable()
export default class ShowAnswereService {
  constructor(private readonly showAnswereUserCase: ShowAnswereUseCase) {}
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const answere = await this.showAnswereUserCase.execute(id);

      return res.status(200).json(answere);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return res.status(400).json({ error: errorMessage });
    }
  }
}
