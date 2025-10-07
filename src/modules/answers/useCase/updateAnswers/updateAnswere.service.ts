import { Injectable } from "@nestjs/common";
import UpdateAnswereUseCase from "./updateAnswereUseCase";
import { Request, Response } from "express";
import IAnswersRegister from "../../dtos/IAnswersRegister";

@Injectable()
export default class UpdateAnswereService {
  constructor(private readonly updateAnswereUseCase: UpdateAnswereUseCase) {}
  async handle(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const data = req.body as IAnswersRegister;
    try {
      const answere = await this.updateAnswereUseCase.execute(id, data);
      return res.status(200).json(answere);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return res.status(400).json({ error: errorMessage });
    }
  }
}
