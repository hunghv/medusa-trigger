import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as dotenvVault from 'dotenv-vault';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  dotenvVault.config();
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Hunghv2 example')
    .setDescription('The cats Hunghv2 description')
    .setVersion('1.0')
    .addTag('hunghv2')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
