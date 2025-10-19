import UserResponse from "src/modules/userResponse/infra/entities/userResponse.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50, unique: true })
  cpf: string;

  @OneToMany(() => UserResponse, (userResponse) => userResponse.user)
  userResponse: UserResponse[];
}
