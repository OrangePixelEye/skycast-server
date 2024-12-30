// src/types/env.d.ts

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT: number;
      OPEN_WEATHER_KEY: string;
      OPEN_WEATHER_URL: string;
      AMADEUS_API_URL: string;
      AMADEUS_TOKEN: string;
      AMADEUS_SECRET_KEY: string;
      REDIS_HOST: string;
      REDIS_PORT: number;
    }
  }
}

export {};
