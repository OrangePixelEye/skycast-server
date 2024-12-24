import { Injectable } from '@nestjs/common';
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
    return city != undefined && city !== '';
  }

  validateCoordenates(params: { lat?: number; lon?: number }) {
    if (params.lat != undefined && params.lon != undefined) {
      throw new Error('Invalid coordenates');
    }
  }

  getForecast(params: WeatherDTO) {
    const { lat, lon } = params;
    this.validateCoordenates({ lat, lon });
    return this.fetchWeatherApi({ lat, lon, url: 'forecast' });
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
