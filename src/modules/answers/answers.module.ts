import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Answers } from "./infra/Entities/answers.entity";
import AnswersRouter from "./infra/http/Routes/answers.routes";
import DeleteAnswereService from "./useCase/deleteAnswers/deleteAnswere.Service";
import DeleteAnswereUseCase from "./useCase/deleteAnswers/deleteAnswereUseCase";
import ShowAnswereService from "./useCase/showAnswers/showAnswere.service";
import ShowAnswereUseCase from "./useCase/showAnswers/showAnswersUseCase";
import UpdateAnswereService from "./useCase/updateAnswers/updateAnswere.service";
import UpdateAnswereUseCase from "./useCase/updateAnswers/updateAnswereUseCase";
import ListAnswersService from "./useCase/listAnswers/listAnswers.service";
import ListAnswersUseCase from "./useCase/listAnswers/listAnswersUseCase";
import RegisterAnswersService from "./useCase/registerAnswers/registerAnswers.service";
import { RegisterAnswersUseCase } from "./useCase/registerAnswers/registerAnswersUseCase";

@Module({
  imports: [TypeOrmModule.forFeature([Answers])],
  controllers: [AnswersRouter],
  providers: [
    DeleteAnswereService,
    DeleteAnswereUseCase,
    ShowAnswereService,
    ShowAnswereUseCase,
    UpdateAnswereService,
    UpdateAnswereUseCase,
    ListAnswersService,
    ListAnswersUseCase,
    RegisterAnswersService,
    RegisterAnswersUseCase,
  ],
})
export default class AnswersModule {}
