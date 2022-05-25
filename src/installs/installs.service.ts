import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Installs } from './installs.entity';

@Injectable()
export class InstallsService {
  constructor(
    @InjectRepository(Installs)
    private installsRepository: Repository<Installs>,
  ) {}

  findAll(): Promise<Installs[]> {
    return this.installsRepository.find();
  }

  findByAppName(appName: string): Promise<Installs> {
    return this.installsRepository.findOne({
      where: {
        app_name: appName,
      },
    });
  }

  findByCity(city: string): Promise<Installs> {
    return this.installsRepository.findOne({
      where: {
        city,
      },
    });
  }

  findByDeviceModel(deviceModel: string): Promise<Installs> {
    return this.installsRepository.findOne({
      where: {
        device_model: deviceModel,
      },
    });
  }

  findByInstallTimeAsc(): Promise<Installs[]> {
    return this.installsRepository.find({
      order: {
        install_time: 'ASC',
      },
    });
  }

  findByInstallTimeDesc(): Promise<Installs[]> {
    return this.installsRepository.find({
      order: {
        install_time: 'DESC',
      },
    });
  }
}
