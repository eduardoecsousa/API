import { Injectable } from "@nestjs/common";
import DeleteAnswereUseCase from "./deleteAnswereUseCase";
import { Request, Response } from "express";

@Injectable()
export default class deleteAnswereService {
  constructor(private readonly deleteAnswereUseCase: DeleteAnswereUseCase) {}
  async handle(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    try {
      await this.deleteAnswereUseCase.execute(id);
      return res.status(204).send;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return res.status(400).json({ error: errorMessage });
    }
  }
}
