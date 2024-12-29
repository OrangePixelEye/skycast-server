import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  protected redis: Redis;
  constructor() {
    this.redis = new Redis({
      port: process.env.REDIS_PORT,
      host: process.env.REDIS_HOST,
    });
  }

  async getItem(name: string) {
    return this.redis.get(name);
  }

  // todo: include objects
  async setItem(name: string, value: string | number) {
    return this.redis.set(name, value);
  }
}
