import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule} from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { WaifusModule } from './waifus/waifus.module';


@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public',)
  }),
  MongooseModule.forRoot('mongodb+srv://adminPablo:familiamivida@cluster0.mh83gxk.mongodb.net/'),
  WaifusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
