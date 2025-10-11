import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Questions } from "./infra/typeorm/entities/questions.entity";
import QuestionRouter from "./infra/http/routes/questions.routes";
import DeleteQuestionService from "./useCases/deleteQuestion/deleteQuestion.service";
import DeleteQuestionUseCase from "./useCases/deleteQuestion/deleteQuestionUseCase";
import RegisterQuestionService from "./useCases/registerQuestion/registerQuestion.service";
import RegisterQuestionUseCase from "./useCases/registerQuestion/registerQuestionUseCase";
import ShowQuestionService from "./useCases/showQuestion/showQuestion.service";
import ShowQuestionUseCase from "./useCases/showQuestion/showQuestionUseCase";
import UpdateQuestionService from "./useCases/updateQuestion/updateQuestion.service";
import UpdateQuestionUseCase from "./useCases/updateQuestion/updateQuestionUseCase";
import ListQuestionService from "./useCases/listQuestion/listQuestion.service";
import ListQuestionUseCase from "./useCases/listQuestion/listQuestionUseCase";

@Module({
  imports: [TypeOrmModule.forFeature([Questions])],
  controllers: [QuestionRouter],
  providers: [
    DeleteQuestionService,
    DeleteQuestionUseCase,
    RegisterQuestionService,
    RegisterQuestionUseCase,
    ShowQuestionService,
    ShowQuestionUseCase,
    UpdateQuestionService,
    UpdateQuestionUseCase,
    ListQuestionService,
    ListQuestionUseCase,
  ],
})
export class QuestionModule {}
