import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Customer from "../../infra/entities/customer.entity";
import { Repository } from "typeorm";

@Injectable()
export default class UpdateCustomerUseCase {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}
  async execute(idCustomer: string, data: Partial<Customer>) {
    const customer = await this.customerRepository.findOne({
      where: { id: idCustomer },
    });
    if (!customer) {
      throw new Error("Customer not found");
    }
    await this.customerRepository.update(idCustomer, data);
    return this.customerRepository.findOneBy({ id: idCustomer });
  }
}
