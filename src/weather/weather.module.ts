import { Module } from '@nestjs/common';
import { WeatherService } from './service/weather.service';
import { WeatherController } from './controller/weather.controller';

@Module({
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
