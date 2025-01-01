// src/types/env.d.ts

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT: number;
      OPEN_WEATHER_KEY: string;
      OPEN_WEATHER_URL: string;
      REDIS_HOST: string;
      REDIS_PORT: number;
    }
  }
}

export {};
