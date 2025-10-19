import { Injectable } from "@nestjs/common";
import RegisterUserResponseUseCase from "./registerUserResponseUseCase";
import { Request, Response } from "express";
import IRegisterUserResponse from "../../dtos/IRegisterUserResponse";

@Injectable()
export default class RegisterUserResponseService {
  constructor(
    private readonly registerUserResponseUseCase: RegisterUserResponseUseCase,
  ) {}
  async handle(req: Request, res: Response) {
    const { user, answer } = req.body as IRegisterUserResponse;
    try {
      const createUserResponse = await this.registerUserResponseUseCase.execute(
        {
          user,
          answer,
        },
      );
      return res.status(201).json(createUserResponse);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown Error";
      return res.status(400).json(errorMessage);
    }
  }
}
