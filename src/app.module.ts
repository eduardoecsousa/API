import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, // porta padrão do PostgreSQL
      username: 'postgres', // seu usuário
      password: '123456', // sua senha
      database: 'test', // seu banco
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ⚠️ cuidado em produção (pode apagar/alterar tabelas)
    }),
  ],
})
export class AppModule {}
