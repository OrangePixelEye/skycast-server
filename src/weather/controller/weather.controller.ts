import { Controller, Get, Version } from '@nestjs/common';

@Controller('weather')
export class WeatherController {
  @Get('hello')
  @Version('1')
  helloWorld() {
    return 'Hello World!';
  }
}
