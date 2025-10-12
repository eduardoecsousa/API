import { Answers } from "src/modules/answers/infra/Entities/answers.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Questions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @OneToMany(() => Answers, (answer) => answer.question)
  answers: Answers[];
}
