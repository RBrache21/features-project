import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors({
    origin: 'http://localhost:3000',  
    methods: 'GET,POST',
    credentials: true,
  });
  await app.listen(3001);
}

bootstrap();
