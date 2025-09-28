import { Injectable, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import { IUserRegister } from "../../dtos/IUserRegister";
import { updateUserUseCase } from "./updateUserUseCasa";

@Injectable()
class UpdateUserController {
  constructor(private readonly updateUserUseCase: updateUserUseCase) {}
  async handle(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    const data = request.body as IUserRegister;
    const { id } = request.params;
    try {
      const user: IUserRegister = await this.updateUserUseCase.execute(
        id,
        data,
      );

      return response.status(200).json(user);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return response.status(400).json({ error: errorMessage });
    }
  }
}
export default UpdateUserController;
