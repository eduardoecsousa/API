import { Injectable } from "@nestjs/common";
import ShowUserResponseUseCase from "./showUserResponseUseCase";
import { Request, Response } from "express";

@Injectable()
export default class ShowUserResponseService {
  constructor(
    private readonly showUserResponseUseCase: ShowUserResponseUseCase,
  ) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userResponse = await this.showUserResponseUseCase.execute(id);
      return res.status(200).json(userResponse);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error";
      return res.status(404).json({ message: errorMessage });
    }
  }
}
