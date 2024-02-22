import { PartialType } from '@nestjs/mapped-types';
import { CreateWaifusDto } from './create-waifus.dto';

export class UpdateWaifusDto extends PartialType(CreateWaifusDto) {}
