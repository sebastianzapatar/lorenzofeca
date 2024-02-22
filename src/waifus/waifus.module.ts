import { Module } from '@nestjs/common';
import { WaifusService } from './waifus.service';
import { WaifusController } from './waifus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Waifus, WaifusSchema } from './entities/waifus.entity';



@Module({
  controllers: [WaifusController],
  providers: [WaifusService],
  imports: [MongooseModule.forFeature([{name: Waifus.name, schema: WaifusSchema}])],
})
export class WaifusModule {}
