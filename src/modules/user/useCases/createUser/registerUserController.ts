import type { Request, Response } from "express";
import { RegisterUserUseCase } from "./registerUserUseCase";
import { IUserRegister } from "../../dtos/IUserRegister";
import { Injectable } from "@nestjs/common";

@Injectable()
class RegisterUserController {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    const { cpf } = request.body as IUserRegister;
    try {
      const user: IUserRegister = await this.registerUserUseCase.execute({
        cpf,
      });

      return response.status(201).json(user);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return response.status(400).json({ error: errorMessage });
    }
  }
}
export default RegisterUserController;
