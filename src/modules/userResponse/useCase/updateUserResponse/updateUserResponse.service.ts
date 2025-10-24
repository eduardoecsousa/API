import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import UserResponse from "../../infra/entities/userResponse.entity";
import UpdateUserResponseUseCase from "./updateUserResponseUseCase";

@Injectable()
export default class UpdateUserResponseService {
  constructor(
    private readonly updateUserResponseUseCase: UpdateUserResponseUseCase,
  ) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body as UserResponse;
    try {
      const userResponse = await this.updateUserResponseUseCase.execute(
        id,
        data,
      );
      return res.status(200).json(userResponse);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error";
      return res.status(404).json({ message: errorMessage });
    }
  }
}
