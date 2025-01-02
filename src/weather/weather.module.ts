import { Module } from '@nestjs/common';
import { WeatherService } from './service/weather.service';
import { WeatherController } from './controller/weather.controller';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  providers: [WeatherService],
  controllers: [WeatherController],
  imports: [RedisModule],
})
export class WeatherModule {}
