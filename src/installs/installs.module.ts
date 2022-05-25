import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstallsController } from './installs.controller';
import { InstallsService } from './installs.service';
import { Installs } from './installs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Installs])],
  providers: [InstallsService],
  controllers: [InstallsController],
})
export class InstallsModule {}
