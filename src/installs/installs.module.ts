import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Installs } from './installs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Installs])],
})
export class InstallsModule {}
