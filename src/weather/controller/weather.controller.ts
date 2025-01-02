import { Controller, Get, Query, Version } from '@nestjs/common';
import { WeatherDTO } from '../dto/current-weather.dto';
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
  getCurrent(@Query() query: WeatherDTO) {
    return this.service.getCurrentWeather(query);
  }

  @Get('forecast')
  @Version('1')
  getForecast(@Query() query: WeatherDTO) {
    return this.service.getForecast(query);
  }

  @Get('geolocation')
  @Version('1')
  getGeolocation(@Query() query: WeatherDTO) {
    return this.service.getGeolocationByCity(query);
  }
}
