import { Controller, Get } from '@nestjs/common';

@Controller('premium')
export class PremiumController {
  @Get()
  findAll(): string {
    return 'This action returns all premium';
  }
}
