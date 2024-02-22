import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { CreateWaifusDto } from './dto/create-waifus.dto';
import { Waifus, WaifusSchema } from './entities/waifus.entity';
import { UpdateWaifusDto } from './dto/update-waifus.dto';

@Injectable()
export class WaifusService {
  constructor(
    @InjectModel(Waifus.name) 
    private readonly waifusModel: Model<Waifus>
  ){}
  async create(createWaifusDto: CreateWaifusDto) {
    const waifus = await this.waifusModel.create(createWaifusDto);
    return waifus;
  }

  findAll() {
    return this.waifusModel.find({});
  }

  async findOne(id: string) {
    let waifu=await this.waifusModel.findById(id);
    console.log(waifu);
    if(!waifu) throw new NotFoundException('Lorenzo traidor secuestro a la waifu');
    return waifu;
  }

  async update(id: string, updateWaifusDto: UpdateWaifusDto) {
    let waifu=await this.findOne(id);
    await waifu.updateOne(updateWaifusDto,{new:true});

    return {...waifu.toJSON(),...updateWaifusDto};
  }

  async remove(id: string) {
    let waifu=await this.findOne(id);
    await waifu.deleteOne();
    return waifu;
  }
}
