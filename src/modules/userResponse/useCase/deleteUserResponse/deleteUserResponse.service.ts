import { Injectable } from "@nestjs/common";
import DeleteUserResponseUseCase from "./deleteUserResponseUseCase";
import { Request, Response } from "express";

@Injectable()
export default class DeleteUserResponseService {
  constructor(
    private readonly deleteUserResponseUseCase: DeleteUserResponseUseCase,
  ) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this.deleteUserResponseUseCase.execute(id);
      return res.status(200).json(result);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error";
      return res.status(404).json({ message: errorMessage });
    }
  }
}
