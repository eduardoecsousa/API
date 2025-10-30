import { Controller, Post, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import RegisterCustomerService from "../../useCase/registerCustomer/registerCustomer.service";

@Controller("customers")
export default class CustomerRouter {
  constructor(
    private readonly registerCustomerService: RegisterCustomerService,
  ) {}

  @Post()
  create(@Req() req: Request, @Res() res: Response) {
    return this.registerCustomerService.handle(req, res);
  }
}
