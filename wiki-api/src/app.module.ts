import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedController } from './feed/feed.controller';
import { FeedService } from './feed/feed.service';
import { TranslationService } from './translation/translation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsMiddleware } from './middlewares/logs.middleware';
import { FeedModule } from './feed/feed.module';
import { RequestLog } from './entities/request-log.entity';

@Module({
  imports: [
    FeedModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'request-logs.db',
      entities: [RequestLog],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([RequestLog]),
  ],
  controllers: [AppController, FeedController],
  providers: [AppService, TranslationService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
