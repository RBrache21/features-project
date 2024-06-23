import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { WikiFeturedContent } from 'src/interfaces/WikiFeturedContent';

@Injectable()
export class FeedService {
  private readonly WIKIPEDIA_API_URL =
    'https://api.wikimedia.org/feed/v1/wikipedia';

  async getFeaturedContent(date: string, language: string) {
    try {
      const response = await axios.get<WikiFeturedContent>(
        `${this.WIKIPEDIA_API_URL}/${language}/featured/${date}`,
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch featured content',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
