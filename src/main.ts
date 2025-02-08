import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '10gb' }));
  app.use(bodyParser.urlencoded({ limit: '10gb', extended: true }));

  app.enableCors({
    origin: '*',
    methods: 'GET, POST, DELETE, PUT, PATCH, HEAD',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
