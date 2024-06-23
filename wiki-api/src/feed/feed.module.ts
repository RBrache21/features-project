import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { TranslationService } from '../translation/translation.service';

@Module({
  imports: [],
  controllers: [FeedController],
  providers: [FeedService, TranslationService],
  exports: [FeedService],
})
export class FeedModule {}
