import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Customer from "../../infra/entities/customer.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import IEffectLogin from "../../dtos/IEffectLogin";

@Injectable()
export default class AuthService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    private jwtService: JwtService,
  ) {}

  async validateCustomer(
    email: string,
    password: string,
  ): Promise<Customer | null> {
    const customer = await this.customerRepository.findOne({
      where: { email },
    });
    if (customer && (await bcrypt.compare(password, customer.password))) {
      return customer;
    }
    return null;
  }

  login(customer: IEffectLogin): { access_token: string } {
    const validateCustomer = this.validateCustomer(
      customer.email,
      customer.password,
    );
    if (validateCustomer == null) {
      throw new Error("Invalid credentials");
    }
    const payload = { username: customer.email, sub: customer.password };
    return { access_token: this.jwtService.sign(payload) };
  }
}
