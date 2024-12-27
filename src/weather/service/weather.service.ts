import { BadRequestException, Injectable } from '@nestjs/common';
import { WeatherDTO } from '../dto/current-weather.dto';

@Injectable()
export class WeatherService {
  private API_KEY: string;
  private BASE_URL: string;

  constructor() {
    this.API_KEY = process.env.OPEN_WEATHER_KEY;
    this.BASE_URL = process.env.OPEN_WEATHER_URL;
    if (this.API_KEY === '') {
      throw new Error('Api key not found!');
    }
    if (this.BASE_URL === '') {
      throw new Error('Base url not found!');
    }
  }

  getCurrentWeather(params: WeatherDTO) {
    const { lat, lon } = params;
    this.validateCoordenates({ lat, lon });
    return this.fetchWeatherApi({ lat, lon, url: 'weather' });
  }

  validateCity(city?: string) {
    const hasNumberRegex = /\d/;
    if (city == undefined || city === '') {
      throw new BadRequestException('City must not be empty');
    }
    if (city.length < 3 || city.length > 50) {
      throw new BadRequestException(
        'City name must be between 3 and 50 characters!',
      );
    }
    if (hasNumberRegex.test(city)) {
      throw new BadRequestException('City should not include numbers');
    }
  }

  validateCoordenates(params: { lat?: number; lon?: number }) {
    if (params.lat == undefined || params.lon == undefined) {
      throw new BadRequestException('Invalid coordenates');
    }
  }

  getForecast(params: WeatherDTO) {
    const { lat, lon } = params;
    this.validateCoordenates({ lat, lon });
    return this.fetchWeatherApi({ lat, lon, url: 'forecast' });
  }

  async getGeolocation(params: WeatherDTO) {
    const { city } = params;
    this.validateCity(city);
    // todo: types
    const request = await fetch(
      `${process.env.AMADEUS_API_URL}reference-data/locations/cities?keyword=${city}&max=8`,
      {
        headers: {
          Authorization: 'Bearer ' + process.env.AMADEUS_TOKEN,
        },
      },
    );
    const body = await request.json();
    return body;
  }

  private async fetchWeatherApi<T>(params: {
    lat: number;
    lon: number;
    url: string;
  }) {
    const request = await fetch(
      `${this.BASE_URL}/${params.url}?lat=${params.lat}&lon=${params.lon}&appid=${this.API_KEY}`,
      {},
    );
    const body = (await request.json()) as T;
    return body;
  }
}
