/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremiumModule } from './premium/premium.module';

@Module({
  imports: [PremiumModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
