import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Waifus extends Document{
    @Prop({
        unique: true
    })
    name: string;

    @Prop()
    image: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

}
export const WaifusSchema = SchemaFactory.createForClass(Waifus);