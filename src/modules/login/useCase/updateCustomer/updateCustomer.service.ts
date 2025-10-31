import { Injectable } from "@nestjs/common";
import UpdateCustomerUseCase from "./updateCustomerUseCase";
import { Request, Response } from "express";

@Injectable()
export default class UpdateCustomerService {
  constructor(private readonly updateCustomerUseCase: UpdateCustomerUseCase) {}
  async handle(req: Request, res: Response) {
    const { idCustomer } = req.params;
    const data = req.body as Partial<any>;
    try {
      const updatedCustomer = await this.updateCustomerUseCase.execute(
        idCustomer,
        data,
      );
      return res.status(200).json(updatedCustomer);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Internal server error";
      return res.status(500).json({ message });
    }
  }
}
