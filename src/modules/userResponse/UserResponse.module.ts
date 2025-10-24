import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserResponse from "./infra/entities/userResponse.entity";
import UserResponseRoutes from "./infra/http/UserResponse.routes";
import ListUserResponseUseCase from "./useCase/listUserResponse/listUserResponseUseCase";
import ListUserResponseService from "./useCase/listUserResponse/listUserResponse.service";
import RegisterUserResponseService from "./useCase/registerUserResponse/registeeUserResponse.service";
import RegisterUserResponseUseCase from "./useCase/registerUserResponse/registerUserResponseUseCase";
import UpdateUserResponseService from "./useCase/updateUserResponse/updateUserResponse.service";
import UpdateUserResponseUseCase from "./useCase/updateUserResponse/updateUserResponseUseCase";
import ShowUserResponseService from "./useCase/showUserResponse/showUserCase.service";
import ShowUserResponseUseCase from "./useCase/showUserResponse/showUserResponseUseCase";
import DeleteUserResponseService from "./useCase/deleteUserResponse/deleteUserResponse.service";
import DeleteUserResponseUseCase from "./useCase/deleteUserResponse/deleteUserResponseUseCase";

@Module({
  imports: [TypeOrmModule.forFeature([UserResponse])],
  controllers: [UserResponseRoutes],
  providers: [
    ListUserResponseService,
    ListUserResponseUseCase,
    RegisterUserResponseService,
    RegisterUserResponseUseCase,
    UpdateUserResponseService,
    UpdateUserResponseUseCase,
    ShowUserResponseService,
    ShowUserResponseUseCase,
    DeleteUserResponseService,
    DeleteUserResponseUseCase,
  ],
})
export class UserResponseModule {}
