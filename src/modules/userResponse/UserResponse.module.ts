import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserResponse from "./infra/entities/userResponse.entity";
import UserResponseRoutes from "./infra/http/UserResponse.routes";
import ListUserResponseUseCase from "./useCase/listUserResponse/listUserResponseUseCase";
import ListUserResponseService from "./useCase/listUserResponse/listUserResponse.service";
import RegisterUserResponseService from "./useCase/registerUserResponse/registeeUserResponse.service";
import RegisterUserResponseUseCase from "./useCase/registerUserResponse/registerUserResponseUseCase";

@Module({
  imports: [TypeOrmModule.forFeature([UserResponse])],
  controllers: [UserResponseRoutes],
  providers: [
    ListUserResponseService,
    ListUserResponseUseCase,
    RegisterUserResponseService,
    RegisterUserResponseUseCase,
  ],
})
export class UserResponseModule {}
