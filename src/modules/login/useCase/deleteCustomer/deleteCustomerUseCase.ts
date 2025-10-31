import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Customer from "../../infra/entities/customer.entity";
import { Repository } from "typeorm";

@Injectable()
export default class DeleteCustomerUseCase {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}
  async execute(customerId: string) {
    const customer = await this.customerRepository.findOne({
      where: { id: customerId },
    });
    if (!customer) {
      throw new Error("Customer not found");
    }
    await this.customerRepository.remove(customer);
    return { message: "Customer deleted successfully" };
  }
}
