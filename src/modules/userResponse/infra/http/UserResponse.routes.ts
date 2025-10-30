import { Controller, Delete, Get, Post, Put, Req, Res } from "@nestjs/common";
import listUserResponseService from "../../useCase/listUserResponse/listUserResponse.service";
import registerUserResponseService from "../../useCase/registerUserResponse/registeeUserResponse.service";
import type { Request, Response } from "express";
import UpdateUserResponseService from "../../useCase/updateUserResponse/updateUserResponse.service";
import DeleteUserResponseService from "../../useCase/deleteUserResponse/deleteUserResponse.service";
import ShowUserResponseService from "../../useCase/showUserResponse/showUserCase.service";

@Controller("userresponse")
export default class UserResponseRoutes {
  constructor(
    private readonly listUserResponseService: listUserResponseService,
    private readonly registerUserResponseService: registerUserResponseService,
    private readonly updateUserResponseService: UpdateUserResponseService,
    private readonly deleteUserResponseService: DeleteUserResponseService,
    private readonly showUserResponseService: ShowUserResponseService,
  ) {}
  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    return this.listUserResponseService.handle(req, res);
  }

  @Get(":id")
  getById(@Req() req: Request, @Res() res: Response) {
    return this.showUserResponseService.handle(req, res);
  }

  @Post()
  create(@Req() req: Request, @Res() res: Response) {
    return this.registerUserResponseService.handle(req, res);
  }

  @Put(":id")
  update(@Req() req: Request, @Res() res: Response) {
    return this.updateUserResponseService.handle(req, res);
  }

  @Delete(":id")
  delete(@Req() req: Request, @Res() res: Response) {
    return this.deleteUserResponseService.handle(req, res);
  }
}
