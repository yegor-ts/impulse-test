import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOSTNAME,
      port: parseInt(<string>process.env.DB_PORT),
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
