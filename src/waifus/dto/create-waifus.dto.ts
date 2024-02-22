import { IsNumber, IsString, MaxLength, MinLength} from "class-validator";

export class CreateWaifusDto {

    @IsString()
    name:string;
    
    @IsString()
    @MinLength(5)
    image: string;

    @IsString()
    @MinLength(20)
    @MaxLength(150)
    description: string;

    @IsNumber()
    price: number;

}
