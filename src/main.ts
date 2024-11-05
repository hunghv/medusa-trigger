import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as dotenvVault from 'dotenv-vault';

async function bootstrap() {
  dotenvVault.config();
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  console.log(process.env);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
