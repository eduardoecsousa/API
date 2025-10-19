import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import listUserResponseService from "../../useCase/listUserResponse/listUserResponse.service";
import registerUserResponseService from "../../useCase/registerUserResponse/registeeUserResponse.service";
import type { Request, Response } from "express";

@Controller("userresponse")
export default class UserResponseRoutes {
  constructor(
    private readonly listUserResponseService: listUserResponseService,
    private readonly registerUserResponseService: registerUserResponseService,
  ) {}
  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    return this.listUserResponseService.handle(req, res);
  }

  @Post()
  create(@Req() req: Request, @Res() res: Response) {
    return this.registerUserResponseService.handle(req, res);
  }
}
