import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import ListUserResponseUseCase from "./listUserResponseUseCase";

@Injectable()
export default class ListUserResponseService {
  constructor(
    private readonly listUserResponseUseCase: ListUserResponseUseCase,
  ) {}
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const userResponses = await this.listUserResponseUseCase.execute();
      return res.status(200).json(userResponses);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return res.status(400).json({ error: errorMessage });
    }
  }
}
