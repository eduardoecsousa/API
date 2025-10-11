import { Controller, Delete, Get, Post, Put, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import DeleteAnswereService from "src/modules/answers/useCase/deleteAnswers/deleteAnswere.Service";
import ListAnswersService from "src/modules/answers/useCase/listAnswers/listAnswers.service";
import RegisterAnswersService from "src/modules/answers/useCase/registerAnswers/registerAnswers.service";
import ShowAnswereService from "src/modules/answers/useCase/showAnswers/showAnswere.service";
import UpdateAnswereService from "src/modules/answers/useCase/updateAnswers/updateAnswere.service";

@Controller()
export default class AnswersRouter {
  constructor(
    private readonly registerAnswersService: RegisterAnswersService,
    private readonly showAnswereService: ShowAnswereService,
    private readonly listAnswersService: ListAnswersService,
    private readonly updateAnswereService: UpdateAnswereService,
    private readonly deleteAnswereService: DeleteAnswereService,
  ) {}
  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    return this.listAnswersService.handle(req, res);
  }

  @Get(":id")
  getById(@Req() req: Request, @Res() res: Response) {
    return this.showAnswereService.handle(req, res);
  }

  @Post()
  create(@Req() req: Request, @Res() res: Response) {
    return this.registerAnswersService.handle(req, res);
  }

  @Put()
  update(@Req() req: Request, @Res() res: Response) {
    return this.updateAnswereService.handle(req, res);
  }

  @Delete()
  delete(@Req() req: Request, @Res() res: Response) {
    return this.deleteAnswereService.handle(req, res);
  }
}
