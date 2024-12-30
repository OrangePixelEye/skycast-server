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

  getItem(name: string) {
    return this.redis.get(name);
  }

  // todo: include objects
  setItem(name: string, value: string | number) {
    return this.redis.setex(name, 1795, value);
  }
}
