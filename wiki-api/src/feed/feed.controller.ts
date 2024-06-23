import { Controller, Get, Query, Param } from '@nestjs/common';
import { FeedService } from './feed.service';
import { IsDateString, IsString, IsOptional } from 'class-validator';
import { TranslationService } from 'src/translation/translation.service';

class GetFeedDto {
  @IsDateString()
  date: string;

  @IsString()
  @IsOptional()
  language: string;
}

class TranslateDto {
  @IsString()
  language: string;
}

@Controller('feed')
export class FeedController {
  constructor(
    private readonly feedService: FeedService,
    private readonly translationService: TranslationService,
  ) {}

  @Get()
  async getFeed(@Query() query: GetFeedDto) {
    const { date, language = 'en' } = query;
    return this.feedService.getFeaturedContent(date, language);
  }

  @Get('translate/:language')
  async getTranslatedFeed(
    @Query() query: GetFeedDto,
    @Param() params: TranslateDto,
  ) {
    const { date, language = 'en' } = query;
    const targetLanguage = params.language;
    const content = await this.feedService.getFeaturedContent(date, language);

    // First validate if content.mostread exists
    if (content.mostread) {
      for (const item of content.mostread.articles) {
        item.normalizedtitle = await this.translationService.translateText(
          item.normalizedtitle,
          targetLanguage,
        );
        if (item.extract) {
          item.extract = await this.translationService.translateText(
            item.extract,
            targetLanguage,
          );
        }
      }
    }

    return content;
  }
}
