import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Customer from "../../infra/entities/customer.entity";
import { Repository } from "typeorm";
import IRegisterCustomer from "../../dtos/IRegisterCustomer";

@Injectable()
export default class RegisterCustomerUseCase {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async execute(data: IRegisterCustomer): Promise<Customer> {
    const customer = this.customerRepository.create(data);
    await this.customerRepository.save(customer);
    return customer;
  }
}
