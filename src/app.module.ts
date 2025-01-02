import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [WeatherModule, ConfigModule.forRoot(), RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
