// src/types/env.d.ts

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT: number;
      OPEN_WEATHER_KEY: string;
    }
  }
}

export {};
