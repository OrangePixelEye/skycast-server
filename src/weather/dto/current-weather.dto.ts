export interface CurrentWeatherDTO extends Coord {
  city: string;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number; // Optional for some responses
  grnd_level?: number; // Optional for some responses
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  country?: string; // Optional for some responses
  sunrise?: number; // Optional for some responses
  sunset?: number; // Optional for some responses
  pod?: string; // Optional for some responses
}

export interface Rain {
  '3h': number;
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

export interface ForecastWeather {
  dt: number;
  main: Main;
  weather: WeatherDescription[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

export interface ForecastWeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastWeather[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
