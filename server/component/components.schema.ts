import { prop, Typegoose } from "typegoose";

export class Component extends Typegoose {
    @prop()
    id: string;

    @prop()
    tag: string;

    @prop()
    username: string;
    
    @prop()
    description: string;

    @prop()
    likes: number;

    @prop()
    views: number;
  }
