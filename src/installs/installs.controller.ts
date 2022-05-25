import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { InstallsService } from './installs.service';
import { Installs } from './installs.entity';

@Controller('installs')
export class InstallsController {
  constructor(private readonly installsService: InstallsService) {}

  @Get()
  async get(): Promise<Installs[]> {
    const installs = await this.installsService.findAll();

    return installs;
  }

  @Get('appName/:appName')
  async getByAppName(@Param('appName') appName: string): Promise<Installs> {
    const install = await this.installsService.findByAppName(appName);
    if (!install) {
      throw new NotFoundException();
    }

    return install;
  }

  @Get('city/:city')
  async getByCity(@Param('city') city: string): Promise<Installs> {
    const install = await this.installsService.findByCity(city);
    if (!install) {
      throw new NotFoundException();
    }

    return install;
  }

  @Get('device/:device')
  async getByDeviceModel(@Param('device') device: string): Promise<Installs> {
    const install = await this.installsService.findByDeviceModel(device);
    if (!install) {
      throw new NotFoundException();
    }

    return install;
  }

  @Get('latest')
  async getByInstallTimeAsc(): Promise<Installs[]> {
    const installs = await this.installsService.findByInstallTimeAsc();

    return installs;
  }

  @Get('oldest')
  async getByInstallTimeDesc(): Promise<Installs[]> {
    const installs = await this.installsService.findByInstallTimeDesc();

    return installs;
  }
}
