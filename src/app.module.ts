import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { deepStrictEqual } from 'assert';
import { deflateSync } from 'zlib';
import { setDefaultHighWaterMark } from 'stream';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
