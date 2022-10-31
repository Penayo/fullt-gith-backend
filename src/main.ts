import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
    .setTitle('Github repository Commit List')
    .setDescription('A github repository commits API using Github REST API')
    .setVersion('1.0')
    .addTag('branches')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
