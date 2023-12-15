import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  app.setGlobalPrefix('api/v1');
  await app.listen(PORT, () => {
    console.log(`[server]:Running on Port: ${PORT}`);
  });
}
bootstrap();
