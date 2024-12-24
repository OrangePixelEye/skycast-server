import {
  Coord,
  WeatherDescription,
  Main,
  Wind,
  Clouds,
  Sys,
} from './weather.dto';

export interface WeatherDTO extends Coord {
  city: string;
}

export interface CurrentWeatherResponse {
  coord: Coord;
  weather: WeatherDescription[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
