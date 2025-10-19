import { Answers } from "src/modules/answers/infra/Entities/answers.entity";

export default interface IRegisterUserResponse {
  user: string;
  answer: Answers[];
}
