import { Module } from "@nestjs/common";
import { Questions } from "../questions/infra/typeorm/entities/questions.entity";
import { Answers } from "../answers/infra/Entities/answers.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeedService } from "./seed.service";
import { SeedController } from "./seed.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Questions, Answers])],
  providers: [SeedService],
  controllers: [SeedController],
})
export class SeedModule {}
