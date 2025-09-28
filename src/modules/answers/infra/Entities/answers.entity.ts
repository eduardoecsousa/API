import { Questions } from "src/modules/questions/infra/typeorm/entities/questions.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Answers {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  answer: string;

  @ManyToOne(() => Questions, (question) => question.answers)
  question: Questions;
}
