import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import DeleteCustomerUseCase from "./deleteCustomerUseCase";

@Injectable()
export default class DeleteCustomerService {
  constructor(private readonly deleteCustomerUseCase: DeleteCustomerUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this.deleteCustomerUseCase.execute(id);
      return res.status(200).json(result);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Internal server error";
      return res.status(404).json({ message });
    }
  }
}
