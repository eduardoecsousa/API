import { Answers } from "src/modules/answers/infra/Entities/answers.entity";
import { User } from "src/modules/user/infra/typeorm/entities/User.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export default class UserResponse {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.userResponse)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column("jsonb", { nullable: true })
  answer: Answers[];
}
