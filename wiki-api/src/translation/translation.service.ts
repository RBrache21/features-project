import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TranslationService {
  private readonly LIBRETRANSLATE_API_URL = 'http://localhost:8080/translate';

  async translateText(text: string, targetLanguage: string) {
    try {
      const response = await axios.post(this.LIBRETRANSLATE_API_URL, {
        q: text,
        source: 'en',
        target: targetLanguage,
        format: 'text',
      });
      return response.data.translatedText;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Failed to translate text',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
