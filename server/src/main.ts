/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { paymentMiddleware, Resource } from 'x402-express';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const facilitatorUrl = process.env.FACILITATOR_URL as Resource;
  const payTo = process.env.ADDRESS as `0x${string}`;

  if (!facilitatorUrl || !payTo) {
    console.error('Missing required environment variables');
    process.exit(1);
  }

  app.use(
    paymentMiddleware(
      payTo,
      {
        // Route configurations for protected endpoints
        'GET /premium': {
          // USDC amount in dollars
          price: '$0.001',
          network: 'base-sepolia',
        },
      },
      {
        url: facilitatorUrl,
      },
    ),
  );
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
