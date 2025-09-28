import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./infra/typeorm/entities/User.entity";
import { RegisterUserUseCase } from "./useCases/createUser/registerUserUseCase";
import { updateUserUseCase } from "./useCases/updateUser/updateUserUseCasa";
import { FindByIdUserUseCase } from "./useCases/ShowUser/findByIdUserUseCase";
import { FindAllUserUseCase } from "./useCases/ListUser/findAllUserUseCase";
import { DeleteUserUseCase } from "./useCases/deleteUser/deteleUserUseCase";
import { UserRoutes } from "./infra/http/routes/routesUser";
import UpdateUserController from "./useCases/updateUser/updateUserController";
import FindAllUserController from "./useCases/ListUser/findAllUserController";
import FindByIdUserController from "./useCases/ShowUser/findByIdUserController";
import RegisterUserController from "./useCases/createUser/registerUserController";
import DeleteUserController from "./useCases/deleteUser/deteleUserController";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserRoutes],
  providers: [
    UpdateUserController,
    FindAllUserController,
    FindByIdUserController,
    RegisterUserController,
    DeleteUserController,
    RegisterUserUseCase,
    updateUserUseCase,
    FindAllUserUseCase,
    FindByIdUserUseCase,
    DeleteUserUseCase,
  ],
})
export class UserModule {}
