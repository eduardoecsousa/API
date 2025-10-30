import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Customer from "./infra/entities/customer.entity";
import CustomerRouter from "./infra/http/customer.route";
import RegisterCustomerService from "./useCase/registerCustomer/registerCustomer.service";
import RegisterCustomerUseCase from "./useCase/registerCustomer/registerCustomerUseCase";

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerRouter],
  providers: [RegisterCustomerService, RegisterCustomerUseCase],
})
export class LoginModule {}
