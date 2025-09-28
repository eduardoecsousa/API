import { Controller, Delete, Get, Post, Put, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import RegisterUserController from "src/modules/user/useCases/createUser/registerUserController";
import DeleteUserController from "src/modules/user/useCases/deleteUser/deteleUserController";
import FindAllUserController from "src/modules/user/useCases/ListUser/findAllUserController";
import UpdateUserController from "src/modules/user/useCases/updateUser/updateUserController";
import ShowUserController from "src/modules/user/useCases/ShowUser/showUserController";

@Controller("users")
export class UserRoutes {
  constructor(
    private readonly findAllController: FindAllUserController,
    private readonly showUserController: ShowUserController,
    private readonly deleteUserController: DeleteUserController,
    private readonly updateUserController: UpdateUserController,
    private readonly registerUserController: RegisterUserController,
  ) {}
  @Get()
  getAllUsers(@Req() request: Request, @Res() response: Response) {
    return this.findAllController.handle(request, response);
  }

  @Get(":id")
  getUserById(@Req() request: Request, @Res() response: Response) {
    return this.showUserController.handle(request, response);
  }

  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    return this.registerUserController.handle(request, response);
  }

  @Put(":id")
  updateUser(@Req() request: Request, @Res() response: Response) {
    return this.updateUserController.handle(request, response);
  }

  @Delete(":id")
  deleteUser(@Req() request: Request, @Res() response: Response) {
    return this.deleteUserController.handle(request, response);
  }
}
