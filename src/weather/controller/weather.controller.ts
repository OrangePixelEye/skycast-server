import { Controller, Get, Query, Version } from '@nestjs/common';
import { CurrentWeatherDTO } from '../dto/current-weather.dto';
import { WeatherService } from '../service/weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private service: WeatherService) {}
  @Get('hello')
  @Version('1')
  helloWorld() {
    return 'Hello World!';
  }

  @Get('current')
  @Version('1')
  getCurrent(@Query() query: CurrentWeatherDTO) {
    return this.service.getCurrentWeather(query);
  }

  @Get('forecast')
  getForecast() {
    return 'Wip';
  }

  @Get('historical')
  getHistorical() {
    return 'Wip';
  }
}
