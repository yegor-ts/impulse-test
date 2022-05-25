import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppsflyerApiService } from './appsflyer.service';
import { InstallsModule } from './../installs/installs.module';
import { Installs } from '../installs/installs.entity';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    InstallsModule,
    TypeOrmModule.forFeature([Installs]),
  ],
  providers: [AppsflyerApiService],
})
export class AppsflyerModule {}
