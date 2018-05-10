import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Component } from './components.model';
import { ModelType } from 'typegoose';

@Injectable()
export class ComponentService {
    constructor(@InjectModel(Component) private readonly componentModel: ModelType<Component>) {}

    findAll() {
        return this.componentModel.find().exec();
    }
}