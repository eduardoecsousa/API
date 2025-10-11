import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/User.module";
import { QuestionModule } from "./modules/questions/question.module";
import AnswersModule from "./modules/answers/answers.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // lê o .env
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, UserModule, QuestionModule, AnswersModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: "postgres",
        host: config.get("DB_HOST"),
        port: +(config.get<string>("DB_PORT") ?? 5432),
        username: config.get("DB_USERNAME"),
        password: config.get("DB_PASSWORD"),
        database: config.get("DB_DATABASE"),
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController], // precisa do controller pra ter rota
  providers: [AppService],
})
export class AppModule {}
