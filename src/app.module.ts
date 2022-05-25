import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AppsflyerModule } from './appsflyer/appsflyer.module';
import { InstallsModule } from './installs/installs.module';
import { Installs } from './installs/installs.entity';

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
      entities: [Installs],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Installs]),
    AppsflyerModule,
    InstallsModule,
    HttpModule,
  ],
})
export class AppModule {}
