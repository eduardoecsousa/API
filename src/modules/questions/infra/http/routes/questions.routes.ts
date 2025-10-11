import { Controller, Delete, Get, Post, Put, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";
import DeleteQuestionService from "src/modules/questions/useCases/deleteQuestion/deleteQuestion.service";
import ListQuestionService from "src/modules/questions/useCases/listQuestion/listQuestion.service";
import RegisterQuestionService from "src/modules/questions/useCases/registerQuestion/registerQuestion.service";
import ShowQuestionService from "src/modules/questions/useCases/showQuestion/showQuestion.service";
import UpdateQuestionService from "src/modules/questions/useCases/updateQuestion/updateQuestion.service";

@Controller("questions")
export default class QuestionRouter {
  constructor(
    private readonly registerQuestionService: RegisterQuestionService,
    private readonly showQuestionService: ShowQuestionService,
    private readonly listQuestionService: ListQuestionService,
    private readonly updateQuestionService: UpdateQuestionService,
    private readonly deleteQuestionService: DeleteQuestionService,
  ) {}

  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    return this.listQuestionService.handle(req, res);
  }

  @Get(":id")
  getById(@Req() req: Request, @Res() res: Response) {
    return this.showQuestionService.handle(req, res);
  }

  @Post()
  create(@Req() req: Request, @Res() res: Response) {
    return this.registerQuestionService.handle(req, res);
  }

  @Put(":id")
  update(@Req() req: Request, @Res() res: Response) {
    return this.updateQuestionService.handle(req, res);
  }

  @Delete(":id")
  delete(@Req() req: Request, @Res() res: Response) {
    void this.deleteQuestionService.handle(req, res);
  }
}
