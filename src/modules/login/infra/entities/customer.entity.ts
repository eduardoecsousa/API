import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import CustomerRole from "../../dtos/cutomer.enum";

@Entity()
export default class Customer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  phone: string;

  @Column()
  role: CustomerRole;
}
