import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WaifusService } from './waifus.service';
import { CreateWaifusDto } from './dto/create-waifus.dto';
import { UpdateWaifusDto } from './dto/update-waifus.dto';

@Controller('waifus')
export class WaifusController {
  constructor(private readonly waifusService: WaifusService) {}

  @Post()
  create(@Body() createWaifusDto: CreateWaifusDto) {
    return this.waifusService.create(createWaifusDto);
  }

  @Get()
  findAll() {
    return this.waifusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waifusService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWaifusDto: UpdateWaifusDto) {
    return this.waifusService.update(id, updateWaifusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waifusService.remove(id);
  }
}
