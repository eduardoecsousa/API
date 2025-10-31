import { Injectable } from "@nestjs/common";
import ListCustomerUseCase from "./listCustomerUseCase";
import { Request, Response } from "express";

@Injectable()
export default class ListCustomerService {
  constructor(private readonly listCustomerUseCase: ListCustomerUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const customers = await this.listCustomerUseCase.execute();
      return res.status(200).json(customers);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Internal server error";
      return res.status(500).json({ message });
    }
  }
}
