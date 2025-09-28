import { Injectable, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import { IUserRegister } from "../../dtos/IUserRegister";
import { DeleteUserUseCase } from "./deteleUserUseCase";
import { ShowUserUseCase } from "../ShowUser/showUserUseCase";

@Injectable()
class DeleteUserController {
  constructor(
    private readonly showUserUseCase: ShowUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}
  async handle(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const { id } = request.params;

      const user: IUserRegister | null = await this.showUserUseCase.execute(id);

      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }

      await this.deleteUserUseCase.execute(id);

      return response.status(204).send();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return response.status(400).json({ error: errorMessage });
    }
  }
}
export default DeleteUserController;
