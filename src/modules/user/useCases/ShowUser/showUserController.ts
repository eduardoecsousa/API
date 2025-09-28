import { Injectable } from "@nestjs/common";
import type { Request, Response } from "express";
import { IUserRegister } from "../../dtos/IUserRegister";
import { ShowUserUseCase } from "./showUserUseCase";

@Injectable()
class ShowUserController {
  constructor(private readonly showUserUseCase: ShowUserUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { id } = request.params;

      const user: IUserRegister | null = await this.showUserUseCase.execute(id);

      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }

      return response.status(200).json(user);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return response.status(400).json({ error: errorMessage });
    }
  }
}
export default ShowUserController;
