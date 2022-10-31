import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';

const whitelist = ['http://localhost:3000'];

async function bootstrap() {
  console.log('WHITE LIST', whitelist)

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Accept",
  })

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
