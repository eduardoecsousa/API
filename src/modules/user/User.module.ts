import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./infra/typeorm/entities/User.entity";
import { RegisterUserUseCase } from "./useCases/createUser/registerUserUseCase";
import { updateUserUseCase } from "./useCases/updateUser/updateUserUseCasa";
import { ShowUserUseCase } from "./useCases/ShowUser/showUserUseCase";
import { FindAllUserUseCase } from "./useCases/ListUser/findAllUserUseCase";
import { DeleteUserUseCase } from "./useCases/deleteUser/deteleUserUseCase";
import { UserRoutes } from "./infra/http/routes/routesUser";
import UpdateUserController from "./useCases/updateUser/updateUserController";
import FindAllUserController from "./useCases/ListUser/findAllUserController";
import RegisterUserController from "./useCases/createUser/registerUserController";
import DeleteUserController from "./useCases/deleteUser/deteleUserController";
import ShowUserController from "./useCases/ShowUser/showUserController";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserRoutes],
  providers: [
    UpdateUserController,
    FindAllUserController,
    ShowUserController,
    RegisterUserController,
    DeleteUserController,
    RegisterUserUseCase,
    updateUserUseCase,
    FindAllUserUseCase,
    ShowUserUseCase,
    DeleteUserUseCase,
  ],
})
export class UserModule {}
