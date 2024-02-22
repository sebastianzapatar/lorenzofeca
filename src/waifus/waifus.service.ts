import { Injectable } from '@nestjs/common';
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

  findOne(id: string) {
    return this.waifusModel.findById(id);
  }

  update(id: number, updateWaifusDto: UpdateWaifusDto) {
    return `This action updates a #${id} waifus`;
  }

  async remove(id: string) {
    let waifu=await this.findOne(id);
    await waifu.deleteOne();
    return waifu;
  }
}
