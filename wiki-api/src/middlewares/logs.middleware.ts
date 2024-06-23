import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestLog } from 'src/entities/request-log.entity';

@Injectable()
export class LogsMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(RequestLog)
    private readonly requestLogRepository: Repository<RequestLog>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const log = new RequestLog();
    log.method = req.method;
    log.path = req.url;
    log.queryParams = JSON.stringify(req.query);

    await this.requestLogRepository.save(log);
    next();
  }
}
