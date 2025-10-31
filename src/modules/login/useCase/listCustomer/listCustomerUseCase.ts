import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Customer from "../../infra/entities/customer.entity";
import { Repository } from "typeorm";

@Injectable()
export default class ListCustomerUseCase {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}
  async execute() {
    return this.customerRepository.find();
  }
}
