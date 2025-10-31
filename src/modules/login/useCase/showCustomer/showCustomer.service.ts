import { Injectable } from "@nestjs/common";
import ShowCustomerUseCase from "./showCustomerUseCase";
import { Request, Response } from "express";

@Injectable()
export default class ShowCustomerService {
  constructor(private readonly showCustomerUseCase: ShowCustomerUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const customer = await this.showCustomerUseCase.execute(id);
      return res.status(200).json(customer);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Internal server error";
      return res.status(404).json({ message });
    }
  }
}
