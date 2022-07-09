import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const port = 5400;

async function bootstrap() {
   const app = await NestFactory.create<NestFastifyApplication>(
     AppModule,
     new FastifyAdapter(),
   );
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('我的博客')
    .setDescription('博客系统 ')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  console.log('http://localhost:' + port);
  console.log(`http://localhost:${port}/api-docs`);
  console.log(process.env.NODE_ENV );
  await app.listen(port, '0.0.0.0');
}
bootstrap();
