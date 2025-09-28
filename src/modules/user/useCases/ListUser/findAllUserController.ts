import { Injectable, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import { IUserRegister } from "../../dtos/IUserRegister";
import { FindAllUserUseCase } from "./findAllUserUseCase";

@Injectable()
class FindAllUserController {
  constructor(private readonly findAllUserUseCase: FindAllUserUseCase) {}
  async handle(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const AllUsers: IUserRegister[] = await this.findAllUserUseCase.execute();

      return response.status(200).json(AllUsers);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return response.status(400).json({ error: errorMessage });
    }
  }
}
export default FindAllUserController;
