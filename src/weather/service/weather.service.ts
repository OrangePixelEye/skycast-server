import { Injectable } from '@nestjs/common';
import {
  CurrentWeatherDTO,
  CurrentWeatherResponse,
} from '../dto/current-weather.dto';

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

  async getCurrentWeather(params: CurrentWeatherDTO) {
    const { lat, lon } = params;
    if (this.validateCoordenates({ lat, lon })) {
      return this.fetchCurrentWeather({ lat, lon });
    }
  }

  async fetchCurrentWeather(params: {
    lat: number;
    lon: number;
  }): Promise<CurrentWeatherResponse> {
    const request = await fetch(
      `${this.BASE_URL}/weather?lat=${params.lat}&lon=${params.lon}&appid=${this.API_KEY}`,
      {},
    );
    const body = (await request.json()) as CurrentWeatherResponse;
    return body;
  }

  validateCity(city?: string) {
    return city != undefined && city !== '';
  }

  validateCoordenates(params: { lat?: number; lon?: number }) {
    return params.lat != undefined && params.lon != undefined;
  }
}
