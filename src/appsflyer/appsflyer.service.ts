import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { parseFile } from '@fast-csv/parse';
import { writeFile } from 'fs';
import { join } from 'path';
import { Installs } from 'src/installs/installs.entity';
import { getCurrentDay, getPreviousDay } from '../utils/date';

@Injectable()
export class AppsflyerApiService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    @InjectRepository(Installs)
    private installsRepository: Repository<Installs>,
  ) {}

  private readonly api_token = this.configService.get<string>('API_TOKEN');
  private readonly app_id = this.configService.get<string>('APP_ID');
  private readonly report_type = 'installs_report';
  private readonly baseUrl = `https://hq.appsflyer.com/export/${this.app_id}/${this.report_type}/v5?api_token=${this.api_token}`;

  @Cron(CronExpression.EVERY_DAY_AT_8AM)
  fetchData(): void {
    const from = getPreviousDay();
    const to = getCurrentDay();

    const requestUrl = `${this.baseUrl}&from=${from}&to=${to}`;

    this.httpService.axiosRef
      .get(requestUrl)
      .then((response) => {
        const file = `${this.app_id}-${this.report_type}-${from}-${to}.csv`;
        writeFile(file, response.data, (err) => {
          if (err)
            throw new InternalServerErrorException('Failed writing to file');
        });
        return file;
      })
      .then((fileName: string) => {
        parseFile(join(__dirname, fileName))
          .on('error', (error) => console.log(error))
          .on('data', (row) => this.installsRepository.save(row));
      })
      .catch(({ response }) => {
        if (response.status === 400)
          throw new BadRequestException(response.data);
        else if (response.status === 401)
          throw new UnauthorizedException(response.data);
        else if (response.status === 404)
          throw new NotFoundException(response.data);
      });
  }
}
