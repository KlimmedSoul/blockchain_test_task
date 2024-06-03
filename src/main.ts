import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT;
  const config = new DocumentBuilder()
    .setTitle('Test task API documentation')
    .setDescription('Документация API сервиса тестового задания')
    .addServer(`http://localhost:${PORT}/api`)
    .build();
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document, {
    customSiteTitle: 'Test task API Documentation',
    customCss:
      '.parameters-col_description p{ font-size: 0.8rem;}',
  })
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  await app.listen(PORT);
  Logger.log(`API Server started on ${PORT} port`, 'MainEntrypoint');
  Logger.log(
    `Swagger runs on http://localhost:${PORT}/api/swagger`,
    'Swagger',
  );
}
bootstrap();
