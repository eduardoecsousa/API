import { Injectable } from "@nestjs/common";
import RegisterCustomerUseCase from "./registerCustomerUseCase";
import { Request, Response } from "express";
import IRegisterCustomer from "../../dtos/IRegisterCustomer";
import * as bcrypt from "bcrypt";

@Injectable()
export default class RegisterCustomerService {
  constructor(
    private readonly registerCustomerUseCase: RegisterCustomerUseCase,
  ) {}
  async handle(req: Request, res: Response) {
    const data = req.body as IRegisterCustomer;
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const customer = await this.registerCustomerUseCase.execute({
      ...data,
      password: hashedPassword,
    });
    return res.status(201).json(customer);
  }
}
